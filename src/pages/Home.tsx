import { Fragment } from 'react'
import { ArrowRight, Code2, Gauge, Layers3, PencilRuler, ShieldCheck } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Reveal } from '../components/ui/Reveal'
import { ProjectCard } from '../components/portfolio/ProjectCard'
import { projects, services } from '../data/content'

const heroLeadWords = ['We', 'Build', 'Digital', 'Experiences', 'That']
const heroAccentWords = ['Move', 'Businesses', 'Forward.']

export function Home() {
  return (
    <>
      <section className="relative flex min-h-[720px] items-center overflow-hidden pt-20">
        <div aria-hidden="true" className="hero-mesh absolute inset-0" />
        <div aria-hidden="true" className="hero-parallax absolute inset-0 grid-lines opacity-50" />
        <div aria-hidden="true" className="hero-orb absolute left-[58%] top-28 h-72 w-72 rounded-full bg-violet-600/10 blur-[100px]" />
        <div aria-hidden="true" className="hero-orb hero-orb-blue absolute right-[8%] top-[46%] h-64 w-64 rounded-full bg-blue-500/10 blur-[110px]" />
        <div className="container-shell relative grid items-center gap-14 py-20 lg:grid-cols-[1.15fr_.85fr]">
          <div className="max-w-3xl">
            <span className="eyebrow hero-enter hero-enter-1">Digital product studio</span>
            <h1 aria-label="We Build Digital Experiences That Move Businesses Forward." className="mt-7 text-[44px] font-semibold leading-[1.04] tracking-[-0.055em] text-white sm:text-6xl lg:text-[78px]">
              <span aria-hidden="true">
                {heroLeadWords.map((word, index) => (
                  <Fragment key={word}>
                    <span className="hero-word" style={{ animationDelay: `${80 + index * 65}ms` }}>{word}</span>
                    {index < heroLeadWords.length - 1 ? ' ' : null}
                  </Fragment>
                ))}
                {' '}
                <span className="text-gradient hero-gradient-text">
                  {heroAccentWords.map((word, index) => (
                    <Fragment key={word}>
                      <span className="hero-word" style={{ animationDelay: `${405 + index * 65}ms` }}>{word}</span>
                      {index < heroAccentWords.length - 1 ? ' ' : null}
                    </Fragment>
                  ))}
                </span>
              </span>
            </h1>
            <p className="hero-enter hero-enter-3 mt-7 max-w-xl text-lg leading-8 text-slate-400">Nexora Digital creates modern websites that bring clarity to your brand, value to your visitors and momentum to your business.</p>
            <div className="hero-enter hero-enter-4 mt-9 flex flex-col gap-3 sm:flex-row">
              <Button to="/contact" className="hero-cta">Start a Project</Button>
              <Button to="/portfolio" variant="secondary">Explore Our Work</Button>
            </div>
          </div>

          <div className="relative hidden min-h-[500px] lg:block" aria-label="Agency design preview">
            <div className="hero-visual absolute right-0 top-14 h-[420px] w-[390px] rounded-[32px] border border-white/10 bg-[#0d1020] p-4 shadow-2xl shadow-violet-950/40">
              <div className="h-full rounded-[22px] border border-white/[0.07] bg-[#090b16] p-6">
                <div className="flex items-center justify-between">
                  <div className="h-3 w-20 rounded-full bg-white/10" />
                  <div className="flex gap-2"><span className="h-2 w-2 rounded-full bg-violet-400" /><span className="h-2 w-2 rounded-full bg-white/10" /></div>
                </div>
                <div className="mt-16 h-4 w-32 rounded-full bg-violet-300/50" />
                <div className="mt-5 h-11 w-[85%] rounded-xl bg-gradient-to-r from-violet-400/30 to-blue-400/10" />
                <div className="mt-3 h-3 w-[64%] rounded-full bg-white/[0.07]" />
                <div className="mt-10 grid grid-cols-2 gap-4">
                  <div className="h-32 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4"><Layers3 className="text-violet-300" size={22} /><div className="mt-10 h-2 w-20 rounded-full bg-white/10" /></div>
                  <div className="h-32 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4"><Gauge className="text-blue-300" size={22} /><div className="mt-10 h-2 w-20 rounded-full bg-white/10" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="#services-overview" className="scroll-cue focus-ring absolute bottom-5 left-1/2 z-10 flex items-center gap-3 rounded-full px-3 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500 transition-colors hover:text-slate-300" aria-label="Scroll to services">
          <span>Scroll to explore</span>
          <span aria-hidden="true" className="scroll-indicator"><span /></span>
        </a>
      </section>

      <section id="services-overview" className="section-space border-y border-white/[0.06]">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <SectionHeading eyebrow="What we do" title="Web development built around your business." />
            <Button to="/services" variant="secondary">View all services</Button>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service, index) => (
              <Reveal key={service.title} delay={index * 90}>
                <article className="service-card card-border group rounded-3xl p-7 hover:border-violet-400/20">
                  <div className="service-icon grid h-11 w-11 place-items-center rounded-xl bg-violet-500/10 text-violet-300">
                    {[<PencilRuler key="pencil" size={20} />, <Layers3 key="layers" size={20} />, <Code2 key="code" size={20} />][index]}
                  </div>
                  <h3 className="mt-8 text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{service.description}</p>
                  <Button to="/services" variant="secondary" icon={false}><span className="text-violet-300">Explore service</span><ArrowRight size={15} className="text-violet-300" /></Button>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading eyebrow="Selected work" title="Projects that show how we think." copy="A focused look at our recent development work." />
          <div className="mt-12 grid items-start gap-5 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal key={project.name} delay={index * 100}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-y border-white/[0.06] bg-[#090b16]">
        <div className="container-shell grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <SectionHeading eyebrow="Why Nexora" title="Built with care. Designed for progress." copy="We focus on the details that make a website feel clear, credible and ready to support your next stage." />
          <div className="grid gap-4 sm:grid-cols-2">
            {[['Purpose-led design', 'Every section is shaped around a clear role and user need.', <PencilRuler key="purpose" size={20} />], ['Reliable development', 'Clean, responsive implementation across modern devices.', <Code2 key="reliable" size={20} />], ['Performance minded', 'Lean experiences that keep speed and usability in focus.', <Gauge key="performance" size={20} />], ['Quality assurance', 'Thoughtful checks for layout, functionality and consistency.', <ShieldCheck key="quality" size={20} />]].map(([title, copy, icon], index) => (
              <Reveal key={String(title)} delay={index * 70}>
                <article className="rounded-2xl border border-white/[0.07] p-6"><div className="text-violet-300">{icon}</div><h3 className="mt-5 font-semibold">{String(title)}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{String(copy)}</p></article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading eyebrow="How we work" title="A clear process from idea to launch." align="center" />
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {[['01', 'Discover', 'We clarify goals, audience and project scope.'], ['02', 'Define', 'We turn requirements into a clear visual and content direction.'], ['03', 'Develop', 'We build, test and refine the experience responsively.'], ['04', 'Deliver', 'We prepare the finished website for launch and handover.']].map(([number, title, copy], index) => (
              <Reveal key={number} delay={index * 75}>
                <article className="rounded-2xl border border-white/[0.07] p-6"><span className="text-xs font-bold text-violet-300">{number}</span><h3 className="mt-8 text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{copy}</p></article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <Reveal>
            <div className="relative overflow-hidden rounded-[32px] border border-violet-400/15 bg-gradient-to-br from-violet-600/20 via-navy-900 to-blue-600/10 px-6 py-16 text-center sm:px-12">
              <div className="absolute inset-0 grid-lines opacity-30" />
              <div className="relative">
                <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">Have a project in mind? Let’s build it properly.</h2>
                <p className="mx-auto mt-5 max-w-xl text-slate-400">Tell us what you need and start the conversation about your next website.</p>
                <div className="mt-8"><Button to="/contact">Start a Project</Button></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
