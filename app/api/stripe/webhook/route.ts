import Stripe from 'stripe'
import { NextRequest, NextResponse } from 'next/server'
import { createClient, SupabaseClient } from '@supabase/supabase-js'

export const runtime = 'nodejs'

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY
  if (!key) throw new Error('STRIPE_SECRET_KEY is not set')
  return new Stripe(key)
}

function getSupabase(): SupabaseClient {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) throw new Error('Supabase env vars are not set')
  return createClient(url, key, { auth: { persistSession: false } })
}

async function saveStatus(supabase: SupabaseClient, email: string, status: string) {
  const { error } = await supabase
    .from('users')
    .upsert({ email, subscription_status: status }, { onConflict: 'email' })
  if (error) throw error
}

export async function POST(request: NextRequest) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET
  const signature = request.headers.get('stripe-signature')
  if (!secret || !signature) {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 })
  }

  // Stripe signs the raw body, so read it as text (do not parse JSON first).
  const body = await request.text()

  let event: Stripe.Event
  try {
    event = getStripe().webhooks.constructEvent(body, signature, secret)
  } catch (err) {
    console.error('Webhook signature error:', err instanceof Error ? err.message : err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  try {
    const supabase = getSupabase()

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        const email = session.customer_details?.email
        if (email) await saveStatus(supabase, email, 'active')
        break
      }
      case 'customer.subscription.updated':
      case 'customer.subscription.deleted': {
        const sub = event.data.object as Stripe.Subscription
        const customer = await getStripe().customers.retrieve(sub.customer as string)
        const email = !customer.deleted ? customer.email : null
        if (email) await saveStatus(supabase, email, sub.status)
        break
      }
      default:
        break
    }

    return NextResponse.json({ received: true })
  } catch (err) {
    console.error('Webhook handler error:', err instanceof Error ? err.message : err)
    return NextResponse.json({ error: 'Handler failed' }, { status: 500 })
  }
}
