import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export function Layout() {
  const location = useLocation()

  useEffect(() => {
    const titles: Record<string, [string, string]> = {
      '/': ['Nexora Digital | Web Development Agency', 'Nexora Digital builds modern, responsive websites for businesses, startups and entrepreneurs.'],
      '/services': ['Web Development Services | Nexora Digital', 'Explore landing pages, business websites, React development, redesigns and website maintenance.'],
      '/portfolio': ['Portfolio | Nexora Digital', 'View selected Nexora Digital web development projects, including DarkStore and MarksBuddy.'],
      '/about': ['About Nexora Digital | Web Development Agency', 'Learn about Nexora Digital, our mission, approach and development process.'],
      '/contact': ['Contact Nexora Digital | Start Your Project', 'Contact Nexora Digital to discuss your website development requirements.'],
    }
    const [title, description] = titles[location.pathname] ?? titles['/']
    document.title = title
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', description)
  }, [location.pathname])

  return (
    <div className="min-h-screen overflow-hidden bg-navy-950 text-slate-100">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
