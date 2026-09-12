import React, { useState } from "react";

// Self-contained ChevronDown icon
const ChevronDown = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export default function About() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const experiences = [
    {
      id: "01",
      period: "Mar 2026 — Present",
      company: "Accenture",
      badge: "NEW",
      role: "Software Engineer",
      isCurrent: true,
      details: [
        "Developing scalable, accessible enterprise web interfaces using Nuxt.js and integrating AI features into the frontend.",
        "Optimizing rendering performance and component lifecycles across cross-functional distributed teams.",
        "Implementing reusable design tokens and modular UI system patterns.",
      ],
    },
    {
      id: "02",
      period: "Aug 2025 — Feb 2026",
      company: "Appventurez Mobitech",
      role: "Software Engineer - Frontend",
      details: [
        "Built full-featured interactive learning modules and streamlined student dashboard flows.",
        "Rebuilt a legacy platform into a high-performance, dynamic Vue.js application with Vuex and REST API integration, improving load speed by 60%.",
        "Developed a role-based Admin CMS, reducing system maintenance time by 40% and improving content workflow efficiency.",
        "Optimized UI for SEO, accessibility, and responsiveness, increasing user engagement by 25% across platforms.",
      ],
    },
    {
      id: "03",
      period: "May 2025 — June 2025",
      company: "LawSikho",
      role: "Software Development Engineer",
      details: [
        "Refactored legacy workflows into responsive, reactive component-driven layouts.",
      ],
    },
    {
      id: "04",
      period: "September 2022 — October 2024",
      company: "Beez Innovation Labs",
      role: "Software Engineer",
      details: [
        "Developed scalable SPAs using React.js, collaborating with design and backend teams for seamless API integration.",
        "Delivered high-performing UIs that boosted user engagement by 75% and sales by 80%.",
        "Implemented performance tuning and responsive layouts to enhance UX quality and SEO visibility.",
      ],
    },
    {
      id: "05",
      period: "June 2021 — August 2022",
      company: "Beez Innovation Labs",
      role: "Junior Automation Developer",
      details: [
        "Built an SEO-optimized, responsive website using Nuxt.js",
        "Vuetify, and modern frontend principles.",
        "Improved load performance and accessibility, reducing frontend bugs by 92% and increasing organic traffic by 40%.",
        "Collaborated with cross-functional teams to ensure consistent branding and mobile-first UI design.",
      ],
    },
  ];

  return (
    <section
      id="journey"
      className="bg-[#e2ebe0] text-[#1c1c1c] py-24 px-6 md:px-12"
    >
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
            A calm, dependable timeline replaces decorative fluff and lets each
            role carry its own story.
          </p>
        </div>

        {/* Expandable Timeline Rows */}
        <div className="divide-y divide-gray-300/60">
          {experiences.map((item) => {
            const isExpanded = expandedId === item.id;

            return (
              <div key={item.id} className="transition-colors">
                <button
                  type="button"
                  onClick={() => toggleExpand(item.id)}
                  className="w-full py-5 grid grid-cols-12 items-center gap-4 text-xs tracking-tight text-left group hover:bg-black/[0.02] px-2 rounded-sm focus:outline-none"
                >
                  <div className="col-span-1 text-gray-400 font-mono text-[11px]">
                    {item.id}
                  </div>
                  <div className="col-span-3 text-gray-500 font-mono text-[11px]">
                    {item.period}
                  </div>
                  <div className="col-span-4 font-serif text-base text-gray-900 flex items-center gap-2">
                    <span
                      className={
                        item.isCurrent ? "text-[#ff5733] font-medium" : ""
                      }
                    >
                      {item.company}
                    </span>
                    {item.badge && (
                      <span className="bg-[#d4f84c] text-black text-[9px] uppercase px-1.5 py-0.5 rounded font-sans font-bold">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <div className="col-span-3 text-gray-600 font-normal">
                    {item.role}
                  </div>
                  <div className="col-span-1 text-right text-gray-400 group-hover:text-black">
                    <ChevronDown
                      size={15}
                      className={`inline-block transition-transform duration-200 ${
                        isExpanded ? "rotate-180 text-black" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* Collapsible Content */}
                {isExpanded && (
                  <div className="pb-6 pt-1 px-2 pl-4 md:pl-16 text-xs text-gray-600 border-t border-gray-300/30">
                    <ul className="space-y-1.5 list-disc list-inside marker:text-[#ff5733]">
                      {item.details.map((point, index) => (
                        <li key={index} className="leading-relaxed">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
