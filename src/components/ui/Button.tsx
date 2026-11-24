import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonProps = {
  to: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  icon?: boolean
  className?: string
}

export function Button({ to, children, variant = 'primary', icon = true, className = '' }: ButtonProps) {
  const styles = variant === 'primary'
    ? 'bg-violet-500 text-white hover:bg-violet-600'
    : 'border border-white/12 bg-white/[0.03] text-white hover:border-violet-400/50 hover:bg-violet-400/[0.07]'

  return (
    <Link to={to} className={`focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${styles} ${className}`}>
      {children}
      {icon && <ArrowRight size={16} aria-hidden="true" />}
    </Link>
  )
}
