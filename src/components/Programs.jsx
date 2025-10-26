import React from 'react';
import { BookOpen, Microscope, Globe } from 'lucide-react';

const items = [
  {
    icon: BookOpen,
    title: 'Global Curriculum',
    desc: 'Inquiry-driven learning aligned with international standards, fostering critical thinking and creativity.',
    accent: 'from-sky-400 to-blue-600',
  },
  {
    icon: Microscope,
    title: 'STEM Labs',
    desc: 'Hands-on projects in robotics, coding, and sciences to build problem-solving skills for the real world.',
    accent: 'from-cyan-400 to-sky-600',
  },
  {
    icon: Globe,
    title: 'Beyond Classroom',
    desc: 'Language immersion, arts, and sports programs that nurture global citizenship and well-being.',
    accent: 'from-indigo-400 to-blue-700',
  },
];

export default function Programs() {
  return (
    <section id="programs" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(40%_40%_at_20%_20%,rgba(56,189,248,0.12),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Programs that unlock potential</h2>
          <p className="mt-3 text-slate-600">Our holistic approach blends academic excellence with character, creativity, and collaboration.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <article key={idx} className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm transition hover:shadow-xl">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br opacity-10 blur-3xl group-hover:opacity-20 transition " style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-from), var(--tw-gradient-to))` }} />
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${item.accent} grid place-items-center m-5 shadow-inner`}>
                <item.icon className="text-white" size={24} />
              </div>
              <div className="px-5 pb-6">
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">{item.desc}</p>
                <div className="mt-5 flex items-center gap-2 text-sky-700 font-medium">
                  <span>Learn more</span>
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div id="admissions" className="mt-14 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-slate-900">Admissions</h4>
            <p className="mt-2 text-slate-600">Applications are open for Kindergarten to Grade 12. Scholarships available for outstanding applicants.</p>
            <a href="#contact" className="mt-4 inline-flex rounded-full bg-sky-600 px-5 py-2 text-white hover:bg-sky-700">Start Application</a>
          </div>
          <div className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-slate-900">Campus Life</h4>
            <p className="mt-2 text-slate-600">Modern classrooms, maker spaces, sports arenas, and green courtyards designed for balanced growth.</p>
            <a href="#contact" className="mt-4 inline-flex rounded-full border border-slate-300 bg-white px-5 py-2 text-slate-800 hover:border-sky-400 hover:text-sky-700">Book a Tour</a>
          </div>
          <div className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-slate-900">Parent Partnership</h4>
            <p className="mt-2 text-slate-600">Transparent communication, regular showcases, and family learning events strengthen our community.</p>
            <a href="#contact" className="mt-4 inline-flex rounded-full border border-slate-300 bg-white px-5 py-2 text-slate-800 hover:border-sky-400 hover:text-sky-700">Join the Community</a>
          </div>
        </div>
      </div>
    </section>
  );
}
