import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fbf9f5] text-[#1c1c1c] font-sans selection:bg-[#ff5733] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
      </main>
      <footer className="bg-[#182622] text-[#f2efe9] pt-20 pb-12 px-6 md:px-12 mt-20">
        <div className="max-w-7xl mx-auto">
          <Contact />
          <Footer />
        </div>
      </footer>
    </div>
  );
}