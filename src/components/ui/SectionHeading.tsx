type SectionHeadingProps = {
  eyebrow: string
  title: string
  copy?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, copy, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-[48px]">{title}</h2>
      {copy && <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">{copy}</p>}
    </div>
  )
}
