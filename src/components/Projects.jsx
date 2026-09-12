import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      category: 'FULL-STACK PRODUCT',
      title: 'Job Tracker',
      link: '#',
    },
    {
      category: 'COMPANY PLATFORM',
      title: 'BeezLabs',
      link: '#',
    },
    {
      category: 'WEB APPLICATION',
      title: 'HowIsOutside?',
      link: '#',
    },
  ];

  return (
    <section id="work" className="max-w-7xl mx-auto px-6 md:px-12 py-24">
      <div className="mb-14">
        <span className="text-[10px] tracking-widest uppercase font-semibold text-gray-400 block mb-2">
          02 / Selected Work
        </span>
        <h2 className="text-4xl sm:text-5xl font-serif tracking-tight leading-tight">
          Useful, clear, <br />
          <span className="italic text-[#ff5733]">well considered.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <a
            key={idx}
            href={proj.link}
            className="group bg-[#e4ede3] rounded-lg p-8 sm:p-10 min-h-[190px] flex flex-col justify-end transition-all hover:opacity-95"
          >
            <div className="space-y-1">
              <span className="text-[10px] tracking-wider uppercase text-gray-500 font-semibold block font-mono">
                {proj.category}
              </span>
              <div className="flex items-center space-x-2">
                <h3 className="text-2xl font-serif text-gray-900 group-hover:text-[#ff5733] transition-colors">
                  {proj.title}
                </h3>
                <ArrowUpRight
                  size={18}
                  className="text-gray-600 group-hover:text-[#ff5733] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}