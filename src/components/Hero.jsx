
export default function Hero() {
  return (
    <header className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Headline */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-center space-x-2 text-[11px] uppercase tracking-widest font-semibold text-gray-500">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5733]"></span>
            <span>Frontend Engineer • India</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif leading-[1.1] font-normal tracking-tight">
            Designing calm, <br />
            <span className="italic font-serif text-[#ff5733]">capable digital</span> <br />
            experiences.
          </h1>

          <p className="max-w-md text-sm text-gray-500 pt-2 leading-relaxed">
            Siddharth Gope turns complex ideas into clear, useful interfaces—one considered interaction at a time.
          </p>
        </div>

        {/* Right Badge & Rings Graphic */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <div className="relative flex items-center justify-center">
            <div className="w-64 h-64 md:w-72 md:h-72 rounded-full border border-gray-200/80 flex items-center justify-center">
              <div className="w-52 h-52 md:w-60 md:h-60 rounded-full border border-gray-200/60 flex items-center justify-center">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-[#e2ede2] flex items-center justify-center shadow-inner">
                  <span className="font-serif text-4xl text-gray-800 tracking-tight">SG</span>
                </div>
              </div>
            </div>

            {/* Sticky Label */}
            <div className="absolute -top-2 -right-4 bg-[#d4f84c] text-black text-[11px] font-medium leading-tight py-2 px-3 rounded-sm shadow-sm transform rotate-6">
              4+ years <br />
              building for the web
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}