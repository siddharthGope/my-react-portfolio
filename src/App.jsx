import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'
import { DownloadFileProvider } from './utilities/usedownloadPdf'



function App() {

  return (
    <DownloadFileProvider>
      <div>
        <Navbar />
        <Hero />
        <Skills />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </DownloadFileProvider>
  )
}

export default App
