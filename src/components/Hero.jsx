import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28">
      <div className="relative h-[80vh] md:h-[86vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/qw5pDw-Wh4PXvDw4/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/90" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(59,130,246,0.15),transparent_60%)]" />

        <div className="relative z-10 h-full flex items-center">
          <div className="mx-auto max-w-7xl px-6">
            <div className="w-full md:w-[60%]">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
                Bluemen International School
              </h1>
              <p className="mt-4 text-slate-700 text-lg md:text-xl leading-relaxed">
                Future-ready learning with a global perspective. Where curiosity meets craftsmanship and students thrive.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a id="apply" href="#contact" className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-white font-medium shadow-lg shadow-sky-600/20 hover:bg-sky-700 transition-colors">
                  Apply Now
                </a>
                <a href="#programs" className="inline-flex items-center gap-2 rounded-full border border-slate-300/70 bg-white/70 px-6 py-3 text-slate-800 hover:border-sky-400 hover:text-sky-700 transition-colors">
                  Explore Programs
                </a>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
                <div className="flex -space-x-2">
                  <span className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gradient-to-br from-sky-400 to-blue-700" />
                  <span className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gradient-to-br from-indigo-400 to-blue-600" />
                  <span className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gradient-to-br from-cyan-400 to-sky-600" />
                </div>
                <p>Trusted by families across the city</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
