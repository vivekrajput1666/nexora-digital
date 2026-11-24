import { ArrowUpRight, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Footer() {
  const copyrightYear = 2026
  return (
    <footer className="border-t border-white/[0.07] bg-[#080a13]">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-[1.5fr_.7fr_.7fr]">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-violet-400/30 bg-violet-500/10 text-sm font-bold text-violet-300">N</span>
            <span className="font-semibold">Nexora Digital</span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">We build thoughtful, reliable websites that help businesses present themselves with clarity and confidence.</p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Navigate</p>
          <div className="mt-5 flex flex-col gap-3 text-sm text-slate-300">
            <Link className="hover:text-white" to="/services">Services</Link>
            <Link className="hover:text-white" to="/portfolio">Portfolio</Link>
            <Link className="hover:text-white" to="/about">About</Link>
          </div>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Start a conversation</p>
          <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white">Contact us <ArrowUpRight size={15} /></Link>
          <a href="mailto:" className="mt-3 flex items-center gap-2 text-sm text-slate-400 hover:text-white"><Mail size={15} /> Email</a>
        </div>
      </div>
      <div className="container-shell flex flex-col gap-3 border-t border-white/[0.06] py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {copyrightYear} Nexora Digital. All rights reserved.</p>
        <p>Building for India & international clients.</p>
      </div>
    </footer>
  )
}
