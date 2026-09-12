import React from 'react';

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex items-center justify-between">
      <div className="font-serif text-2xl font-bold tracking-tight">SG.</div>
      
      <div className="hidden md:flex items-center space-x-8 text-xs font-medium tracking-wider text-gray-500 uppercase">
        <a href="#work" className="hover:text-black transition-colors">Work</a>
        <a href="#journey" className="hover:text-black transition-colors">Journey</a>
        <a href="#contact" className="hover:text-black transition-colors">Contact</a>
      </div>

      <div>
        <a
          href="#contact"
          className="inline-flex items-center text-xs tracking-wider uppercase px-4 py-2 border border-gray-300 rounded-full hover:border-black transition-colors"
        >
          Let's talk <span className="ml-1 text-[10px]">↗</span>
        </a>
      </div>
    </nav>
  );
}