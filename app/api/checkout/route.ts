import Stripe from 'stripe'
import { NextRequest, NextResponse } from 'next/server'

const secretKey = process.env.STRIPE_SECRET_KEY
const siteUrl = process.env.NEXT_PUBLIC_URL

if (!secretKey) {
  throw new Error('STRIPE_SECRET_KEY is not set')
}

const stripe = new Stripe(secretKey)

export async function POST(request: NextRequest) {
  try {
    const { priceId } = await request.json()

    if (!priceId) {
      return NextResponse.json(
        { error: 'Price ID is required' },
        { status: 400 }
      )
    }

    if (!siteUrl) {
      throw new Error('NEXT_PUBLIC_URL is not set')
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${siteUrl}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/checkout`,
    })

    if (!session.url) {
      throw new Error('Stripe session URL is missing')
    }

    return NextResponse.json({ url: session.url })
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    console.error('Checkout error:', message)
    return NextResponse.json(
      { error: 'Checkout failed' },
      { status: 500 }
    )
  }
}