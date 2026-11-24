import { Check, Code2, LayoutTemplate, Palette, Rocket, Search, TestTube2 } from 'lucide-react'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'

export function About() {
  return (
    <>
      <section className="relative overflow-hidden grid-lines border-b border-white/[0.06] pt-20">
        <div className="about-orb absolute -right-20 top-20 h-72 w-72 rounded-full bg-violet-500/[0.07] blur-[90px]" />
        <div className="container-shell relative py-20 sm:py-24">
          <span className="eyebrow">About Nexora Digital</span>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-6xl">A modern web agency focused on clarity, quality and craft.</h1>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="Who we are" title="We turn business needs into focused digital experiences." />
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-5 text-base leading-8 text-slate-400">
              <p>Nexora Digital is an independent web development studio focused on building modern websites and web applications for businesses, startups, entrepreneurs and individuals.</p>
              <p>Our approach combines purposeful design, modern development and practical communication, with an emphasis on clear requirements and thoughtful delivery.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-[#090b16] py-16">
        <div className="container-shell grid gap-5 md:grid-cols-2">
          <Reveal><article className="card-border rounded-3xl p-7"><span className="text-xs font-bold uppercase tracking-[0.14em] text-violet-300">Our mission</span><h2 className="mt-5 text-2xl font-semibold">Make strong digital presence accessible.</h2><p className="mt-4 text-sm leading-7 text-slate-400">To help organizations communicate professionally and build useful websites that support real business goals.</p></article></Reveal>
          <Reveal delay={90}><article className="card-border rounded-3xl p-7"><span className="text-xs font-bold uppercase tracking-[0.14em] text-blue-300">Our approach</span><h2 className="mt-5 text-2xl font-semibold">Understand first. Build with intention.</h2><p className="mt-4 text-sm leading-7 text-slate-400">We begin with the purpose of the website, then align structure, design and implementation around that direction.</p></article></Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading eyebrow="Capabilities" title="Modern technologies, applied with purpose." copy="Our toolkit supports responsive interfaces, scalable components and reliable project delivery." />
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {[['React', <Code2 key="react" size={22} />], ['TypeScript', <Check key="typescript" size={22} />], ['Tailwind CSS', <Palette key="tailwind" size={22} />], ['Vite', <Rocket key="vite" size={22} />], ['React Router', <LayoutTemplate key="router" size={22} />], ['Responsive UI', <LayoutTemplate key="responsive" size={22} />]].map(([name, icon], index) => (
              <Reveal key={String(name)} delay={index * 55}>
                <div className="card-border grid min-h-36 place-items-center rounded-2xl p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-violet-400/20"><div className="text-violet-300">{icon}</div><p className="mt-3 text-sm font-semibold">{String(name)}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-t border-white/[0.06]">
        <div className="container-shell">
          <SectionHeading eyebrow="Development process" title="From the first question to the final handover." align="center" />
          <div className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {[['01', 'Discover', 'Understand goals', <Search key="search" size={20} />], ['02', 'Plan', 'Define structure', <LayoutTemplate key="plan" size={20} />], ['03', 'Design', 'Shape the experience', <Palette key="design" size={20} />], ['04', 'Develop', 'Build responsively', <Code2 key="develop" size={20} />], ['05', 'Refine', 'Test and hand over', <TestTube2 key="test" size={20} />]].map(([number, title, copy, icon], index) => (
              <Reveal key={String(number)} delay={index * 65}>
                <article className="h-full rounded-2xl border border-white/[0.07] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/20"><div className="flex items-center justify-between text-violet-300"><span>{icon}</span><span className="text-xs font-bold">{String(number)}</span></div><h3 className="mt-8 font-semibold">{String(title)}</h3><p className="mt-2 text-sm text-slate-400">{String(copy)}</p></article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
