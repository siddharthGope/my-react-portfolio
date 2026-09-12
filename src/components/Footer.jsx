import React from 'react';

export default function Footer() {

    const currentYear = new Date().getFullYear();
  return (
    <div className="pt-12 mt-12 border-t border-gray-800/80 flex flex-col sm:flex-row justify-between items-center text-[10px] text-gray-400 font-mono gap-4">
      <div>© {currentYear} SIDDHARTH GOPE</div>
      <div className="flex space-x-6 tracking-widest">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
          LINKEDIN
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
          GITHUB
        </a>
      </div>
    </div>
  );
}