import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  ['/', 'Home'],
  ['/services', 'Services'],
  ['/portfolio', 'Portfolio'],
  ['/about', 'About'],
  ['/contact', 'Contact'],
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-navy-950/75 shadow-[0_8px_32px_rgba(4,6,16,0.22)] backdrop-blur-xl transition-colors duration-300">
      <nav className="container-shell flex h-20 items-center justify-between" aria-label="Primary navigation">
        <Link to="/" className="focus-ring flex items-center gap-3 rounded-lg" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-violet-400/30 bg-violet-500/10 text-sm font-bold text-violet-300">N</span>
          <span className="text-[17px] font-semibold tracking-[-0.02em] text-white">Nexora <span className="text-slate-400">Digital</span></span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} className={({ isActive }) => `nav-link focus-ring rounded-md text-sm transition-colors ${isActive ? 'nav-link-active text-white' : 'text-slate-400 hover:text-white'}`}>
              {label}
            </NavLink>
          ))}
          <Link to="/contact" className="focus-ring rounded-full bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-violet-600">Let's Talk</Link>
        </div>

        <button type="button" className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-white/10 text-white lg:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((value) => !value)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div id="mobile-menu" aria-hidden={!open} inert={!open} className={`mobile-menu border-t border-white/[0.06] bg-navy-950 px-4 pb-6 pt-3 lg:hidden${open ? ' mobile-menu-open' : ''}`}>
        <div className="container-shell flex flex-col">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} onClick={() => setOpen(false)} className={({ isActive }) => `border-b border-white/[0.06] py-4 text-sm transition-colors duration-200 ${isActive ? 'text-violet-300' : 'text-slate-300 hover:text-white'}`}>{label}</NavLink>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="mt-5 rounded-full bg-white py-3.5 text-center text-sm font-semibold text-navy-950 transition duration-200 hover:bg-violet-100">Let's Talk</Link>
        </div>
      </div>
    </header>
  )
}
