import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/20 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 shadow-lg">
          <nav className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-500 to-blue-700 shadow-inner" />
              <div className="leading-tight">
                <p className="text-sm font-semibold tracking-wide text-slate-700">Bluemen</p>
                <p className="text-xs text-slate-500 -mt-0.5">International School</p>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
              <a href="#home" className="hover:text-sky-700 transition-colors">Home</a>
              <a href="#programs" className="hover:text-sky-700 transition-colors">Programs</a>
              <a href="#admissions" className="hover:text-sky-700 transition-colors">Admissions</a>
              <a href="#contact" className="hover:text-sky-700 transition-colors">Contact</a>
              <a href="#apply" className="rounded-full bg-sky-600 px-4 py-2 text-white shadow hover:bg-sky-700 transition-colors">Apply Now</a>
            </div>

            <button aria-label="Toggle Menu" className="md:hidden p-2 rounded-lg hover:bg-white/70" onClick={() => setOpen(v => !v)}>
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>

          {open && (
            <div className="md:hidden border-t border-slate-200/60 px-4 py-3 space-y-2">
              <a href="#home" className="block px-2 py-2 rounded-lg hover:bg-white/70" onClick={() => setOpen(false)}>Home</a>
              <a href="#programs" className="block px-2 py-2 rounded-lg hover:bg-white/70" onClick={() => setOpen(false)}>Programs</a>
              <a href="#admissions" className="block px-2 py-2 rounded-lg hover:bg-white/70" onClick={() => setOpen(false)}>Admissions</a>
              <a href="#contact" className="block px-2 py-2 rounded-lg hover:bg-white/70" onClick={() => setOpen(false)}>Contact</a>
              <a href="#apply" className="block w-full text-center rounded-full bg-sky-600 px-4 py-2 text-white shadow hover:bg-sky-700" onClick={() => setOpen(false)}>Apply Now</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
