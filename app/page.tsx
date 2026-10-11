'use client'

import { useState, type MouseEvent } from 'react'
import LandingNav from '@/components/landing/LandingNav'
import Reveal from '@/components/landing/Reveal'

const styleTags = [
  'Fantasy', 'Sci-Fi', 'Pixel Art', 'Cyberpunk', 'Horror', 'Watercolor', 'Minimal UI', 'Retro',
]

const gallery = [
  { title: 'Ancient forest shrine', tag: 'Fantasy', from: '#10b981', to: '#2563eb' },
  { title: 'Orbital station', tag: 'Sci-Fi', from: '#6366f1', to: '#0ea5e9' },
  { title: 'Retro arcade street', tag: 'Pixel Art', from: '#ec4899', to: '#3b82f6' },
  { title: 'Floating sky islands', tag: 'Fantasy', from: '#38bdf8', to: '#1d4ed8' },
  { title: 'Neon city in the rain', tag: 'Cyberpunk', from: '#8b5cf6', to: '#2563eb' },
  { title: 'Abandoned hospital corridor', tag: 'Horror', from: '#334155', to: '#0b1220' },
]

const filters = ['All', 'Fantasy', 'Sci-Fi', 'Pixel Art', 'Cyberpunk', 'Horror']

const features = [
  {
    title: 'Game-ready backgrounds',
    body: 'Scenes composed for side-scrollers, RPG maps, menus and loading screens.',
    icon: 'M4 6h16v12H4zM4 14l4-4 4 4 3-3 5 5',
  },
  {
    title: 'UI assets in one place',
    body: 'Panels, frames and textures that match the mood of your background.',
    icon: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
  },
  {
    title: 'Consistent style',
    body: 'Lock a style once and keep every asset in your game looking like it belongs together.',
    icon: 'M12 3l2.5 5.5L20 11l-5.5 2.5L12 19l-2.5-5.5L4 11l5.5-2.5z',
  },
  {
    title: 'Commercial use',
    body: 'Plans from Pro include a commercial license for the assets you generate.',
    icon: 'M12 2v20M17 6H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6',
  },
]

const steps = [
  { n: '01', title: 'Describe the scene', body: 'Pick a style and write what you want to see, in plain words.' },
  { n: '02', title: 'Generate', body: 'Backdropia renders your background in seconds, ready to preview.' },
  { n: '03', title: 'Download and ship', body: 'Grab the file and drop it straight into your project.' },
]

const plans = [
  {
    name: 'Starter',
    price: '$4.99',
    desc: 'For hobbyists',
    features: ['30 generations/month', '5 styles', 'Standard resolution', 'Web access only'],
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$14.99',
    desc: 'For indie developers',
    features: ['200 generations/month', '20 styles', 'High resolution', 'Commercial license', 'Batch generation'],
    highlight: true,
  },
  {
    name: 'Studio',
    price: '$49.99',
    desc: 'For small studios',
    features: ['Unlimited generations', 'All styles', 'Premium resolution', 'API access', 'Team collaboration', 'Priority support'],
    highlight: false,
  },
]

const faqs = [
  {
    q: 'What do I get with each generation?',
    a: 'A full background image you can download and use in your game. Higher plans unlock higher resolutions and more styles.',
  },
  {
    q: 'Can I use the images commercially?',
    a: 'Pro and Studio include a commercial license. Starter is for personal and hobby projects.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. Plans are monthly subscriptions and you can cancel from your account at any time.',
  },
  {
    q: 'How fast is generation?',
    a: 'Most backgrounds are ready in about 30 seconds.',
  },
]

export default function Home() {
  const [spot, setSpot] = useState({ x: 50, y: 30 })
  const [filter, setFilter] = useState('All')
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const onHeroMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setSpot({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  const visibleGallery = filter === 'All' ? gallery : gallery.filter((g) => g.tag === filter)

  return (
    <main className="relative overflow-hidden bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
      <LandingNav />

      {/* HERO */}
      <section
        onMouseMove={onHeroMove}
        className="relative isolate flex min-h-[92vh] items-center pt-28 pb-20"
        style={{
          backgroundImage: `radial-gradient(640px circle at ${spot.x}% ${spot.y}%, rgba(59,130,246,0.16), transparent 60%)`,
        }}
      >
        {/* floating blobs */}
        <div className="pointer-events-none absolute -top-40 -left-32 -z-10 h-[520px] w-[520px] animate-float rounded-full bg-blue-300/40 blur-3xl" />
        <div className="pointer-events-none absolute top-20 -right-40 -z-10 h-[460px] w-[460px] animate-float-slow rounded-full bg-sky-300/40 blur-3xl" />
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.06) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
          }}
        />

        <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-6 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-3 py-1 text-xs font-medium text-blue-700 shadow-sm backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-blue-500" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
                </span>
                AI backgrounds for game developers
              </span>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
                Studio-quality
                <span className="block bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-500 bg-[length:200%_auto] bg-clip-text text-transparent animate-grad-shift">
                  game backgrounds
                </span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                Describe a scene, pick a style, and get a polished background in about 30 seconds.
                Built for indie teams who need great art without the wait.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/checkout"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-blue-600 px-8 py-3.5 font-semibold text-white shadow-xl shadow-blue-600/30 transition hover:-translate-y-0.5 hover:bg-blue-700"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shimmer" />
                  <span className="relative">Get started</span>
                </a>
                <a
                  href="#gallery"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/70 px-8 py-3.5 font-semibold text-slate-800 backdrop-blur transition hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-700"
                >
                  See the gallery
                  <span aria-hidden>→</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* mock generator window */}
          <Reveal delay={250}>
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-blue-400/30 via-sky-300/20 to-indigo-400/30 blur-2xl" />
              <div className="overflow-hidden rounded-2xl border border-white/70 bg-white shadow-2xl shadow-slate-900/10">
                <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                  <span className="ml-3 text-xs text-slate-400">backdropia / generate</span>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-sky-400 via-blue-600 to-indigo-900">
                  <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, #fff 0, transparent 35%), radial-gradient(circle at 20% 80%, #7dd3fc 0, transparent 40%)' }} />
                  <div className="absolute inset-x-0 h-24 animate-scan bg-gradient-to-b from-transparent via-white/25 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/15 p-3 text-white backdrop-blur-md">
                    <div className="text-xs opacity-80">Prompt</div>
                    <div className="text-sm font-medium">Sunset over floating ruins, soft clouds</div>
                  </div>
                </div>
                <div className="space-y-3 p-4">
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-3/4 rounded-full bg-[linear-gradient(90deg,#2563eb,#38bdf8,#2563eb)] bg-[length:200%_100%] animate-shimmer" />
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>Generating…</span>
                    <span className="rounded-full bg-blue-50 px-2 py-0.5 font-medium text-blue-700">Fantasy</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-slate-200 bg-white py-6">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[...styleTags, ...styleTags].map((tag, i) => (
            <span key={i} className="flex items-center gap-10 text-2xl font-semibold text-slate-300">
              {tag}
              <span className="text-blue-400">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Gallery</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Built for every kind of game</h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10 flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                    filter === f
                      ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                      : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:text-blue-700 hover:ring-blue-300'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleGallery.map((g, i) => (
              <Reveal key={g.title} delay={i * 80}>
                <article className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl shadow-lg shadow-slate-900/5 transition duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-600/20">
                  <div
                    className="absolute inset-0 transition duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `linear-gradient(135deg, ${g.from}, ${g.to})` }}
                  />
                  <div
                    className="absolute inset-0 opacity-40 mix-blend-overlay"
                    style={{ backgroundImage: 'radial-gradient(circle at 25% 20%, #fff 0, transparent 30%)' }}
                  />
                  <div className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/70 to-transparent p-5 pt-16 text-white opacity-90 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-xs font-medium uppercase tracking-wider text-sky-200">{g.tag}</span>
                    <h3 className="mt-1 text-lg font-semibold">{g.title}</h3>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="bg-white py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Features</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
              Everything you need to fill your world
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 90}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-xl hover:shadow-blue-600/10">
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-400/0 blur-2xl transition duration-500 group-hover:bg-blue-400/20" />
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/30 transition group-hover:scale-110 group-hover:rotate-6">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={f.icon} />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{f.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-600">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">How it works</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">From idea to file in three steps</h2>
          </Reveal>

          <div className="relative mt-16 grid gap-10 md:grid-cols-3">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent md:block" />
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 120}>
                <div className="relative">
                  <div className="grid h-14 w-14 place-items-center rounded-full border border-blue-200 bg-white text-lg font-bold text-blue-600 shadow-lg shadow-blue-600/10">
                    {s.n}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-600">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-white py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Pricing</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Simple, powerful pricing</h2>
          </Reveal>

          <div className="mt-14 grid items-stretch gap-6 md:grid-cols-3">
            {plans.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <div
                  className={`relative flex h-full flex-col rounded-3xl p-8 transition duration-300 hover:-translate-y-1 ${
                    p.highlight
                      ? 'bg-slate-900 text-white shadow-2xl shadow-blue-600/30 ring-2 ring-blue-500'
                      : 'border border-slate-200 bg-slate-50 hover:shadow-xl hover:shadow-slate-900/5'
                  }`}
                >
                  {p.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                      Most popular
                    </span>
                  )}
                  <h3 className="text-2xl font-bold">{p.name}</h3>
                  <p className={`mt-1 text-sm ${p.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{p.desc}</p>
                  <p className="mt-6 text-5xl font-bold tracking-tight">
                    {p.price}
                    <span className={`text-base font-normal ${p.highlight ? 'text-slate-400' : 'text-slate-500'}`}> /mo</span>
                  </p>

                  <a
                    href="/checkout"
                    className={`mt-8 block rounded-full py-3 text-center font-semibold transition ${
                      p.highlight
                        ? 'bg-blue-600 text-white hover:bg-blue-500'
                        : 'bg-slate-900 text-white hover:bg-blue-600'
                    }`}
                  >
                    Get started
                  </a>

                  <ul className={`mt-8 space-y-3 text-sm ${p.highlight ? 'text-slate-300' : 'text-slate-600'}`}>
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-blue-500/15 text-blue-500">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5 9-10" /></svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-28">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <p className="text-center text-sm font-semibold uppercase tracking-widest text-blue-600">FAQ</p>
            <h2 className="mt-3 text-center text-4xl font-bold tracking-tight md:text-5xl">Questions, answered</h2>
          </Reveal>

          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => {
              const open = openFaq === i
              return (
                <Reveal key={f.q} delay={i * 80}>
                  <div
                    className={`overflow-hidden rounded-2xl border bg-white transition ${
                      open ? 'border-blue-300 shadow-lg shadow-blue-600/10' : 'border-slate-200'
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left font-semibold"
                    >
                      {f.q}
                      <span className={`grid h-7 w-7 flex-none place-items-center rounded-full bg-blue-50 text-blue-600 transition ${open ? 'rotate-45' : ''}`}>+</span>
                    </button>
                    <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                      <p className="overflow-hidden px-6 text-slate-600 leading-relaxed">
                        <span className={open ? 'block pb-5' : 'block'}>{f.a}</span>
                      </p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-28">
        <Reveal>
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 px-8 py-20 text-center text-white shadow-2xl shadow-blue-600/30 animate-grad-shift bg-[length:200%_200%]">
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/20 blur-3xl animate-float" />
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-sky-300/30 blur-3xl animate-float-slow" />
            <h2 className="relative text-4xl font-bold tracking-tight md:text-6xl">Make your next world</h2>
            <p className="relative mx-auto mt-5 max-w-xl text-lg text-blue-100">
              Start generating backgrounds today and spend your time on the game, not the art queue.
            </p>
            <a
              href="/checkout"
              className="relative mt-10 inline-flex rounded-full bg-white px-9 py-4 font-semibold text-blue-700 shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl"
            >
              Get started
            </a>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
          <span className="font-semibold tracking-tight">Backdropia</span>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#gallery" className="hover:text-blue-600">Gallery</a>
            <a href="#pricing" className="hover:text-blue-600">Pricing</a>
            <a href="#faq" className="hover:text-blue-600">FAQ</a>
            <a href="/auth" className="hover:text-blue-600">Sign in</a>
          </div>
          <p className="text-sm text-slate-400">&copy; 2026 Backdropia AI. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
