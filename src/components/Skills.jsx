import React from 'react';

export default function Skills() {
  const skills = [
    'React', 'Next.js', 'TypeScript', 'Tailwind CSS',
    'JavaScript (ES6+)', 'Redux', 'Node.js', 'HTML/CSS',
    'Git', 'UI/UX Design', 'Web Performance'
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
      <span className="text-[10px] tracking-widest uppercase font-semibold text-gray-400 block mb-4">
        Toolkit & Technologies
      </span>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="text-xs font-mono px-3.5 py-1.5 rounded-full border border-gray-300 text-gray-700 bg-transparent hover:border-black transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}