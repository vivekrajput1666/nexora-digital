import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '../data/content'

export function Services() {
  return (
    <>
      <section className="grid-lines border-b border-white/[0.06] pt-20">
        <div className="container-shell py-20 sm:py-24">
          <span className="eyebrow">Services</span>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-6xl">Web development services for where your business is going.</h1>
        </div>
      </section>
      <section className="section-space">
        <div className="container-shell grid gap-5">
          {services.map((service, index) => (
            <article key={service.title} className="card-border grid gap-8 rounded-[28px] p-7 md:grid-cols-[70px_1fr_1fr] md:p-9">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-violet-400/20 bg-violet-500/[0.08] text-sm font-bold text-violet-300">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">{service.title}</h2>
                <p className="mt-4 max-w-lg text-sm leading-7 text-slate-400">{service.description}</p>
                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Key features</p>
                  <ul className="mt-3 space-y-2">{service.features.map((feature) => <li key={feature} className="flex items-center gap-2 text-sm text-slate-300"><Check size={15} className="text-violet-300" />{feature}</li>)}</ul>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6">
                <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Benefit</p><p className="mt-3 text-sm leading-7 text-slate-300">{service.benefits}</p></div>
                <Link to="/contact" className="focus-ring mt-8 inline-flex items-center gap-2 self-start rounded-full bg-violet-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-violet-600">Discuss this service <ArrowRight size={15} /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
