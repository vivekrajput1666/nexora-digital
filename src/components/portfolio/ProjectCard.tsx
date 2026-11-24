import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import type { ProjectData } from '../../data/content'

type ProjectCardProps = {
  project: ProjectData
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <article className="project-card card-border group overflow-hidden rounded-[28px] transition duration-300 hover:-translate-y-1 hover:border-violet-300/20 hover:shadow-[0_28px_90px_rgba(54,44,106,0.22)]">
      <div className={`project-preview relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${project.accent}`}>
        {!imageLoaded && (
          <div className="absolute inset-0 grid place-items-center p-6">
            <div className="flex flex-col items-center text-center">
              <span className="h-px w-9 bg-gradient-to-r from-violet-400 to-blue-400" />
              <p className="mt-4 text-sm font-medium text-slate-300">Project screenshot not provided</p>
              <p className="mt-2 text-xs text-slate-500">Add the real screenshot at</p>
              <code className="mt-1 rounded bg-black/20 px-2 py-1 text-[11px] text-slate-400">{project.image}</code>
            </div>
          </div>
        )}
        <img
          src={project.image}
          alt={`${project.name} website screenshot`}
          loading="lazy"
          decoding="async"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(false)}
          className={`absolute inset-0 h-full w-full object-cover object-top transition duration-700 ease-out group-hover:-translate-y-1 group-hover:scale-[1.035] ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
        <span className="absolute left-5 top-5 z-20 rounded-full border border-white/10 bg-navy-950/75 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-200 backdrop-blur-md">
          Built by Nexora Digital
        </span>
      </div>

      <div className="p-6 sm:p-8">
        <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-violet-300">{project.type}</p>
        <h2 className="project-card-title mt-3 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-[28px]">{project.name}</h2>
        <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.name} technologies`}>
          {project.technologies.map((technology) => (
            <li key={technology} className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-xs text-slate-300">
              {technology}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/[0.07] pt-5">
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="focus-ring inline-flex h-11 items-center gap-2 rounded-full border border-white/10 px-4 text-sm font-semibold text-white transition hover:border-violet-400/40 hover:bg-violet-400/[0.06]">
              View Live Project <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          ) : (
            <button type="button" disabled title="A live project URL has not been configured." className="inline-flex h-11 cursor-not-allowed items-center gap-2 rounded-full border border-white/[0.08] px-4 text-sm font-semibold text-slate-500">
              View Live Project <ArrowUpRight size={15} aria-hidden="true" />
            </button>
          )}
          {!project.liveUrl && <span className="text-xs text-slate-500">Live project URL not configured</span>}
        </div>
      </div>
    </article>
  )
}
