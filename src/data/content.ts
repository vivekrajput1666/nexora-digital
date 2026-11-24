export const services = [
  { title: 'Landing Page Development', description: 'Focused, conversion-oriented landing pages for campaigns, products and lead generation.', features: ['Responsive layout', 'Clear user journey', 'SEO-ready structure'], benefits: 'Present your offer with clarity and give visitors a strong path to take action.' },
  { title: 'Business Website Development', description: 'Professional multi-page websites that communicate your brand, services and credibility.', features: ['Custom design', 'Mobile-first build', 'Content-focused pages'], benefits: 'Build trust with a complete, polished and easy-to-navigate digital presence.' },
  { title: 'React Website Development', description: 'Modern React and TypeScript experiences for scalable, interactive business requirements.', features: ['Reusable components', 'Type-safe code', 'Fast Vite builds'], benefits: 'Create maintainable interfaces that can evolve as your product or business grows.' },
  { title: 'Website Redesign', description: 'Refresh an existing website with a more current design, clearer structure and better usability.', features: ['Visual modernization', 'Layout improvement', 'Responsive refinements'], benefits: 'Improve how your brand is perceived while making your existing content easier to use.' },
  { title: 'Website Bug Fixing & Maintenance', description: 'Practical fixes and ongoing updates for broken layouts, components and technical issues.', features: ['Issue diagnosis', 'Code updates', 'Responsive QA'], benefits: 'Keep your website functional, consistent and ready for its next set of visitors.' },
] as const

export type ProjectData = {
  name: string
  type: string
  description: string
  technologies: string[]
  image: string
  accent: string
  liveUrl?: string
}

export const projects: ProjectData[] = [
  {
    name: 'DarkStore',
    type: 'Full-Stack E-commerce Website',
    description: 'An e-commerce web application built to provide a smooth online shopping experience, with product browsing, shopping workflows and administrative functionality.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MySQL'],
    image: '/images/projects/darkstore-preview.png',
    accent: 'from-violet-500/20 via-indigo-500/10 to-transparent',
    liveUrl: 'https://ecomproject-darkstore.vercel.app/',
  },
  {
    name: 'MarksBuddy',
    type: 'Student Utility Website',
    description: 'A student-focused web application that helps students calculate their academic percentages quickly and understand their results.',
    technologies: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
    image: '/images/projects/marksbuddy-preview.png',
    accent: 'from-blue-500/20 via-cyan-500/10 to-transparent',
    liveUrl: 'https://marksbuddy-calculator.vercel.app/',
  },
] as const
