import { Mail, MessageCircle, Send } from 'lucide-react'
import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Reveal } from '../components/ui/Reveal'
import { services } from '../data/content'

const EMAILJS_ENDPOINT = 'https://api.emailjs.com/api/v1.0/email/send'
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const EMAILJS_CONFIGURED = Boolean(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY)

type SubmissionStatus = {
  type: 'success' | 'error'
  message: string
}

export function Contact() {
  const [searchParams] = useSearchParams()
  const requestedService = services.find((service) => service.title === searchParams.get('service'))?.title ?? services[0].title
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<SubmissionStatus | null>(null)
  const submissionLock = useRef(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (submissionLock.current) return

    const form = event.currentTarget
    const formData = new FormData(form)

    if (String(formData.get('website') ?? '').trim()) {
      setStatus({ type: 'error', message: 'We could not submit this enquiry. Please contact us by email or WhatsApp.' })
      return
    }

    if (!EMAILJS_CONFIGURED) {
      setStatus({ type: 'error', message: 'Email delivery is not configured yet. Please contact us by email or WhatsApp while setup is completed.' })
      return
    }

    submissionLock.current = true
    setIsSubmitting(true)
    setStatus(null)

    const controller = new AbortController()
    const timeoutId = window.setTimeout(() => controller.abort(), 15000)

    try {
      const response = await fetch(EMAILJS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
        template_params: {
  name: formData.get('name'),
  email: formData.get('email'),
  reply_to: formData.get('email'),
  phone: formData.get('phone') || 'Not provided',
  service: formData.get('service'),
  project_details: formData.get('message'),
},
        }),
      })

      if (!response.ok) {
        throw new Error(`EmailJS request failed with status ${response.status}`)
      }

      setStatus({ type: 'success', message: 'Thanks — your enquiry has been sent. We’ll be in touch soon.' })
      formRef.current?.reset()
    } catch (error) {
      console.error('Contact form submission failed:', error)
      setStatus({
        type: 'error',
        message: 'We could not send your enquiry. Please try again or contact us directly by email or WhatsApp.',
      })
    } finally {
      window.clearTimeout(timeoutId)
      submissionLock.current = false
      setIsSubmitting(false)
    }
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
          <Reveal>
            <aside>
              <p className="text-sm leading-7 text-slate-400">Share the basics of your project and the best way to reach you. We’ll review your enquiry and follow up using your preferred contact details.</p>
              <div className="mt-8 space-y-3">
                <a href="mailto:nexoradigitalhub16@gmail.com" className="contact-method card-border flex items-center gap-4 rounded-2xl p-5 hover:border-violet-400/30">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-violet-500/10 text-violet-300"><Mail size={20} /></span>
                  <span><span className="block text-xs text-slate-500">Email us</span><span className="mt-1 block text-sm font-semibold">nexoradigitalhub16@gmail.com</span></span>
                </a>
                <a href="https://wa.me/918491002287" target="_blank" rel="noreferrer" className="contact-method card-border flex items-center gap-4 rounded-2xl p-5 hover:border-blue-400/30">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-500/10 text-blue-300"><MessageCircle size={20} /></span>
                  <span><span className="block text-xs text-slate-500">WhatsApp</span><span className="mt-1 block text-sm font-semibold">+91 8491002287</span></span>
                </a>
              </div>
            </aside>
          </Reveal>

          <Reveal delay={100}>
            <form id="enquiry-form" ref={formRef} className="card-border scroll-mt-24 rounded-[28px] p-6 sm:p-8" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-medium text-slate-300">
                  Name
                  <input name="name" type="text" required minLength={2} maxLength={100} autoComplete="name" className="form-control focus-ring mt-2 h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.035] px-4 text-sm text-white outline-none" placeholder="Your name" />
                </label>
                <label className="text-sm font-medium text-slate-300">
                  Email
                  <input name="email" type="email" required maxLength={254} autoComplete="email" className="form-control focus-ring mt-2 h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.035] px-4 text-sm text-white outline-none" placeholder="you@company.com" />
                </label>
                <label className="text-sm font-medium text-slate-300">
                  Phone (optional)
                  <input name="phone" type="tel" maxLength={30} autoComplete="tel" className="form-control focus-ring mt-2 h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.035] px-4 text-sm text-white outline-none" placeholder="+91..." />
                </label>
                <label className="text-sm font-medium text-slate-300">
                  Service
                  <select name="service" defaultValue={requestedService} className="form-control focus-ring mt-2 h-12 w-full rounded-xl border border-white/[0.08] bg-navy-900 px-4 text-sm text-white outline-none">
                    {services.map((service) => <option key={service.title} value={service.title}>{service.title}</option>)}
                  </select>
                </label>
              </div>

              <label className="mt-5 block text-sm font-medium text-slate-300">
                Project details
                <textarea name="message" required minLength={10} maxLength={5000} rows={6} className="form-control focus-ring mt-2 w-full resize-y rounded-xl border border-white/[0.08] bg-white/[0.035] px-4 py-3 text-sm text-white outline-none" placeholder="Tell us about your goals, requirements and timeline." />
              </label>

              <div aria-hidden="true" className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
                <label>
                  Leave this field empty
                  <input name="website" type="text" tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              {!EMAILJS_CONFIGURED && (
                <p className="mt-4 text-xs leading-5 text-amber-200/80">
                  Email delivery is not configured yet. Use the email or WhatsApp links while EmailJS setup is completed.
                </p>
              )}

              {status && (
                <p role={status.type === 'error' ? 'alert' : 'status'} aria-live="polite" className={`mt-4 text-sm leading-6 ${status.type === 'success' ? 'text-emerald-300' : 'text-rose-300'}`}>
                  {status.message}
                </p>
              )}

              <button type="submit" disabled={isSubmitting} aria-busy={isSubmitting} className="focus-ring mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-violet-500 px-5 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-violet-600 disabled:cursor-wait disabled:opacity-60">
                {isSubmitting ? 'Sending enquiry…' : 'Prepare Enquiry'} <Send size={16} aria-hidden="true" />
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}
