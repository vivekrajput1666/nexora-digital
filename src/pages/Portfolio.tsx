import { ProjectCard } from '../components/portfolio/ProjectCard'
import { projects } from '../data/content'

export function Portfolio() {
  return (
    <>
      <section className="grid-lines border-b border-white/[0.06] pt-20">
        <div className="container-shell py-20 sm:py-24">
          <span className="eyebrow">Selected Work</span>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-6xl">Work That Speaks for Itself.</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">From e-commerce experiences to practical web applications, we build digital products focused on usability, performance and modern design.</p>
        </div>
      </section>
      <section className="section-space pt-14 sm:pt-20">
        <div className="container-shell">
          <p className="mb-7 text-sm text-slate-500">Projects developed by Nexora Digital</p>
          <div className="grid items-start gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
          </div>
        </div>
      </section>
    </>
  )
}
