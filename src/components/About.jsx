import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function About() {
  const experiences = [
    {
      id: '01',
      period: 'Mar 2024 — Present',
      company: 'Accenture',
      badge: 'NEW',
      role: 'Software Engineer',
      isCurrent: true,
    },
    {
      id: '02',
      period: '2023 — 2024',
      company: 'LawSikho',
      role: 'Software Development Engineer',
    },
    {
      id: '03',
      period: '2023',
      company: 'Appventurez Mobitech',
      role: 'Software Engineer - Frontend',
    },
    {
      id: '04',
      period: '2022 — 2023',
      company: 'Beez Innovation Labs',
      role: 'Software Engineer',
    },
    {
      id: '05',
      period: '2021 — 2022',
      company: 'Beez Innovation Labs',
      role: 'Junior Automation Developer',
    },
  ];

  return (
    <section id="journey" className="bg-[#e2ebe0] text-[#1c1c1c] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-gray-300/40 gap-6">
          <div>
            <span className="text-[10px] tracking-widest uppercase font-semibold text-gray-500 block mb-3">
              01 / Career Journey
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif tracking-tight leading-tight">
              A path shaped by <br />
              <span className="italic text-[#ff5733]">curiosity & craft.</span>
            </h2>
          </div>
          <p className="max-w-xs text-xs leading-relaxed text-gray-600">
            A calm, dependable timeline replaces the decorative fluff and lets each role carry its own story.
          </p>
        </div>

        {/* Timeline Rows */}
        <div className="divide-y divide-gray-300/60">
          {experiences.map((item) => (
            <div
              key={item.id}
              className="py-5 grid grid-cols-12 items-center gap-4 text-xs tracking-tight group hover:bg-black/[0.02] transition-colors"
            >
              <div className="col-span-1 text-gray-400 font-mono text-[11px]">{item.id}</div>
              <div className="col-span-3 text-gray-500 font-mono text-[11px]">{item.period}</div>
              <div className="col-span-4 font-serif text-base text-gray-900 flex items-center gap-2">
                <span className={item.isCurrent ? 'text-[#ff5733] font-medium' : ''}>
                  {item.company}
                </span>
                {item.badge && (
                  <span className="bg-[#d4f84c] text-black text-[9px] uppercase px-1.5 py-0.5 rounded font-sans font-bold">
                    {item.badge}
                  </span>
                )}
              </div>
              <div className="col-span-3 text-gray-600 font-normal">{item.role}</div>
              <div className="col-span-1 text-right text-gray-400 group-hover:text-black transition-colors">
                <ArrowUpRight size={14} className="inline-block" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}