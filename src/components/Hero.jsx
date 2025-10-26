import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Shield, GraduationCap, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 overflow-hidden">
      {/* Background: radial glow + subtle grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-sky-50" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(0deg,transparent_24px,rgba(2,6,23,0.07)_25px),linear-gradient(90deg,transparent_24px,rgba(2,6,23,0.07)_25px)] bg-[size:26px_26px]" />
        <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-sky-200 blur-3xl opacity-60" />
        <div className="absolute -bottom-24 -right-16 h-96 w-96 rounded-full bg-blue-200 blur-3xl opacity-60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Copy + CTAs */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-3 py-1 text-xs font-medium text-sky-700 shadow-sm backdrop-blur"
            >
              <Sparkles size={14} />
              Inspiring global learners since 2005
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: 0.05, duration: 0.7 }}
              className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900"
            >
              Bluemen International School
              <span className="relative ml-2 inline-block">
                <span className="relative z-10 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">— where curiosity thrives</span>
                <span className="absolute -inset-1 rounded-xl bg-sky-200/40 blur-lg" aria-hidden="true" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-5 max-w-2xl text-lg md:text-xl leading-relaxed text-slate-700"
            >
              Future-ready learning with global perspectives. We blend rigorous academics, creativity, and character to help every learner flourish.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-white font-medium shadow-lg shadow-sky-600/20 transition-colors hover:bg-sky-700"
              >
                Apply Now
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={18} />
                <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
              <a
                href="#programs"
                className="group inline-flex items-center gap-2 rounded-full border border-slate-300/70 bg-white/70 px-6 py-3 text-slate-800 transition-all hover:border-sky-400 hover:text-sky-700"
              >
                Watch Overview
                <Play size={18} className="opacity-80 group-hover:opacity-100" />
              </a>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-600"
            >
              <div className="flex -space-x-2">
                <span className="inline-block h-9 w-9 rounded-full ring-2 ring-white bg-gradient-to-br from-sky-400 to-blue-700" />
                <span className="inline-block h-9 w-9 rounded-full ring-2 ring-white bg-gradient-to-br from-indigo-400 to-blue-600" />
                <span className="inline-block h-9 w-9 rounded-full ring-2 ring-white bg-gradient-to-br from-cyan-400 to-sky-600" />
                <span className="inline-grid h-9 w-9 place-items-center rounded-full ring-2 ring-white bg-white border border-slate-200 text-[10px] font-semibold text-slate-600">+1k</span>
              </div>
              <p>Trusted by families across the city</p>
            </motion.div>

            {/* Quick highlights */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mt-8 grid gap-4 sm:grid-cols-2"
            >
              <FeatureChip icon={Shield} title="Safe, caring campus" desc="Secure and inclusive environment" />
              <FeatureChip icon={GraduationCap} title="World-class faculty" desc="Experienced IB & STEM mentors" />
            </motion.div>
          </div>

          {/* Right: Decorative card cluster */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Main card */}
              <div className="relative mx-auto w-full max-w-md rounded-3xl border border-slate-200/70 bg-white p-5 shadow-xl">
                <div className="absolute -inset-0.5 -z-10 rounded-[22px] bg-gradient-to-br from-sky-200/60 via-transparent to-indigo-200/60 blur-xl" />
                <div className="overflow-hidden rounded-2xl">
                  <div className="relative h-60 w-full bg-gradient-to-br from-sky-300 via-sky-500 to-blue-700">
                    <GridGlow />
                    <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_30%_30%,rgba(255,255,255,0.45),transparent_60%)]" />
                    <BadgePill className="absolute left-4 top-4">Innovation Lab</BadgePill>
                    <BadgePill className="absolute right-4 bottom-4">Arts & Athletics</BadgePill>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-slate-900">A campus designed to spark creativity</h3>
                    <p className="mt-2 text-sm text-slate-600">Modern classrooms, maker spaces, nature courtyards, and collaborative studios for balanced growth.</p>
                  </div>
                </div>
              </div>

              {/* Floating accent cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="absolute -left-6 -top-6 hidden md:block"
              >
                <MiniStat title="Student-Teacher" value="8:1" color="from-sky-400 to-blue-600" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="absolute -right-6 -bottom-6 hidden md:block"
              >
                <MiniStat title="After-school Clubs" value="30+" color="from-indigo-400 to-blue-700" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom curve accent */}
      <div className="pointer-events-none relative mt-16 h-16 w-full">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
          <svg className="w-full" height="64" viewBox="0 0 1440 64" preserveAspectRatio="none" aria-hidden>
            <path d="M0,32 C240,64 480,0 720,32 C960,64 1200,0 1440,32 L1440,64 L0,64 Z" fill="url(#g)" />
            <defs>
              <linearGradient id="g" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#E0F2FE" />
                <stop offset="100%" stopColor="#DBEAFE" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}

function FeatureChip({ icon: Icon, title, desc }) {
  return (
    <div className="group flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-white p-4 shadow-sm transition hover:shadow-lg">
      <div className="mt-0.5 grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 text-white shadow-inner">
        <Icon size={18} />
      </div>
      <div>
        <p className="font-medium text-slate-900">{title}</p>
        <p className="text-sm text-slate-600">{desc}</p>
      </div>
    </div>
  );
}

function GridGlow() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(0deg,transparent_23px,rgba(255,255,255,0.7)_24px),linear-gradient(90deg,transparent_23px,rgba(255,255,255,0.7)_24px)] bg-[size:26px_26px]" />
      <div className="absolute inset-0 bg-[radial-gradient(30%_30%_at_50%_50%,rgba(255,255,255,0.25),transparent_70%)]" />
    </div>
  );
}

function BadgePill({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border border-white/70 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur ${className}`}>
      {children}
    </span>
  );
}

function MiniStat({ title, value, color = 'from-sky-400 to-blue-600' }) {
  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white p-4 shadow-md">
      <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-inner`}>{value.replace(/[^A-Za-z0-9:+]/g, '').length > 3 ? <span className="text-xs font-semibold">•</span> : <span className="text-sm font-semibold">•</span>}</div>
      <p className="mt-3 text-2xl font-bold tracking-tight text-slate-900">{value}</p>
      <p className="text-xs font-medium text-slate-500">{title}</p>
    </div>
  );
}
