import { Mail, MessageCircle, Send } from 'lucide-react'
import type { FormEvent } from 'react'

export function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <>
      <section className="grid-lines border-b border-white/[0.06] pt-20">
        <div className="container-shell py-20 sm:py-24">
          <span className="eyebrow">Contact</span>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-6xl">Let’s talk about your next website.</h1>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[.72fr_1.28fr]">
          <aside>
            <p className="text-sm leading-7 text-slate-400">Share the basics of your project and the best way to reach you. This form is currently a prepared UI and is not connected to a submission service.</p>
            <div className="mt-8 space-y-3">
              <a href="mailto:" className="card-border flex items-center gap-4 rounded-2xl p-5 transition hover:border-violet-400/30" aria-label="Email contact, address to be added">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-violet-500/10 text-violet-300"><Mail size={20} /></span>
                <span><span className="block text-xs text-slate-500">Email us</span><span className="mt-1 block text-sm font-semibold">nexoradigitalhub16@gmail.com</span></span>
              </a>
              <div className="card-border flex items-center gap-4 rounded-2xl p-5" aria-label="WhatsApp number to be added">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-500/10 text-blue-300"><MessageCircle size={20} /></span>
                <span><span className="block text-xs text-slate-500">WhatsApp</span><span className="mt-1 block text-sm font-semibold">+91 8491002287</span></span>
              </div>
            </div>
          </aside>

          <form className="card-border rounded-[28px] p-6 sm:p-8" onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium text-slate-300">Name<input name="name" type="text" required className="focus-ring mt-2 h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.035] px-4 text-sm text-white outline-none" placeholder="Your name" /></label>
              <label className="text-sm font-medium text-slate-300">Email<input name="email" type="email" required className="focus-ring mt-2 h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.035] px-4 text-sm text-white outline-none" placeholder="you@company.com" /></label>
              <label className="text-sm font-medium text-slate-300">Phone (optional)<input name="phone" type="tel" className="focus-ring mt-2 h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.035] px-4 text-sm text-white outline-none" placeholder="+91..." /></label>
              <label className="text-sm font-medium text-slate-300">Service<select name="service" className="focus-ring mt-2 h-12 w-full rounded-xl border border-white/[0.08] bg-navy-900 px-4 text-sm text-white outline-none"><option>Landing Page</option><option>Business Website</option><option>React Website</option><option>Website Redesign</option><option>Bug Fixing / Maintenance</option></select></label>
            </div>
            <label className="mt-5 block text-sm font-medium text-slate-300">Project details<textarea name="message" required rows={6} className="focus-ring mt-2 w-full resize-y rounded-xl border border-white/[0.08] bg-white/[0.035] px-4 py-3 text-sm text-white outline-none" placeholder="Tell us about your goals, requirements and timeline." /></label>
            <p className="mt-4 text-xs leading-5 text-slate-500">Form integration required: this UI does not collect or transmit data yet.</p>
            <button type="submit" className="focus-ring mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-violet-500 px-5 text-sm font-semibold text-white transition hover:bg-violet-600">Prepare enquiry <Send size={16} /></button>
          </form>
        </div>
      </section>
    </>
  )
}
