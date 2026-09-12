import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="mb-14">
      <span className="text-[10px] tracking-widest uppercase font-mono text-gray-400 block mb-4">
        03 / START A CONVERSATION
      </span>
      <h2 className="text-4xl sm:text-5xl font-serif tracking-tight mb-8 font-normal">
        Have an idea that <br />
        <span className="italic font-serif text-[#ff5733]">deserves care?</span>
      </h2>

      <a
        href="mailto:gsiddharth.1601@gmail.com"
        className="inline-flex items-center text-sm font-mono text-gray-200 hover:text-white border-b border-gray-600 pb-1"
      >
        gsiddharth.1601@gmail.com <span className="ml-1">↗</span>
      </a>
    </section>
  );
}