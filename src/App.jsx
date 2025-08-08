import { lazy } from 'react'
import './App.css'
const Navbar = lazy(() => import('./components/Navbar'))
const Hero = lazy(() => import('./components/Hero'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))
const About = lazy(() => import('./components/About'))
import { DownloadFileProvider } from './utilities/usedownloadPdf'
import { Analytics } from "@vercel/analytics/react"


function App() {



  return (
    // <>
    <DownloadFileProvider>
      <div>
        <Navbar />
        <Hero />
        <Skills />
        <About />
        <Projects />
        <Contact />
        <Footer />
        <Analytics />
      </div>
    </DownloadFileProvider>
    // </>
  )
}

export default App
