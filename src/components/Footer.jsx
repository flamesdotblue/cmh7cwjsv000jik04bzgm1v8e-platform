import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-slate-200/70 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-700" />
              <div>
                <p className="font-semibold text-slate-800">Bluemen International School</p>
                <p className="text-sm text-slate-500">Learning for a changing world</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600 max-w-sm">
              Address: 123 Horizon Avenue, Tech Park District, Metro City
            </p>
            <p className="mt-1 text-sm text-slate-600">Email: admissions@bluemen.school</p>
            <p className="mt-1 text-sm text-slate-600">Phone: +1 (555) 012-3456</p>
          </div>

          <div>
            <p className="font-semibold text-slate-800">Quick Links</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a className="hover:text-sky-700" href="#home">Home</a></li>
              <li><a className="hover:text-sky-700" href="#programs">Programs</a></li>
              <li><a className="hover:text-sky-700" href="#admissions">Admissions</a></li>
              <li><a className="hover:text-sky-700" href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-slate-800">Stay Connected</p>
            <p className="mt-3 text-sm text-slate-600">Follow our journey and see campus life in action.</p>
            <div className="mt-4 flex items-center gap-3">
              <a aria-label="Facebook" href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 hover:border-sky-400 hover:text-sky-700">
                <Facebook size={18} />
              </a>
              <a aria-label="Instagram" href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 hover:border-sky-400 hover:text-sky-700">
                <Instagram size={18} />
              </a>
              <a aria-label="Twitter" href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 hover:border-sky-400 hover:text-sky-700">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200/70 pt-6 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Bluemen International School. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-sky-700">Privacy</a>
            <a href="#" className="hover:text-sky-700">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
