"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Layers3,
  Mail,
  Menu,
  Monitor,
  Send,
  Sparkles,
  X,
} from "lucide-react";

import { FaGithub, FaInstagram } from "react-icons/fa6";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/mulukendaniel1",
    icon: FaGithub,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/mule.ae7",
    icon: FaInstagram,
  },
  {
    label: "Email",
    href: "mailto:danielmuluken01@gmail.com",
    icon: Mail,
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="site-shell">
      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <nav className="nav-glass site-container flex h-[68px] items-center justify-between rounded-2xl px-5">
          <a href="#home" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300 ring-1 ring-blue-400/25">
              <Code2 size={19} />
            </span>
            <span className="text-xl font-extrabold tracking-tight">
              M7<span className="text-blue-400">DEV</span>
              <span className="ml-1 text-[10px] font-medium tracking-[0.2em] text-slate-500">
                ®
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a key={item.label} href={item.href} className="nav-link text-sm">
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="primary-button hidden min-h-10 rounded-xl px-4 text-sm md:inline-flex"
          >
            Let&apos;s Talk <ArrowUpRight size={16} />
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="nav-glass site-container mt-2 overflow-hidden rounded-2xl p-3 md:hidden"
            >
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-screen items-center pt-28 pb-20"
      >
        <div className="hero-grid pointer-events-none absolute inset-0 -z-10" />

        <div className="site-container grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="eyebrow mb-8">
              <span className="status-dot" />
              FULL-STACK DEVELOPER
            </div>

            <h1 className="max-w-3xl text-5xl leading-[1.08] font-black tracking-[-0.055em] sm:text-6xl lg:text-[76px]">
              Building
              <br />
              <span className="blue-gradient">Digital</span>
              <br />
              Experiences<span className="text-blue-400">.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              I build modern websites, powerful applications, and thoughtful
              digital solutions — combining creativity, technology, and
              purpose.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="primary-button">
                Explore My Work <ArrowRight size={17} />
              </a>
              <a href="#contact" className="secondary-button">
                Get In Touch <Send size={16} />
              </a>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <span className="text-xs font-medium tracking-wider text-slate-500">
                CONNECT WITH ME
              </span>
              <span className="h-px w-8 bg-slate-700" />

              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-300"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Developer identity card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[420px]"
          >
            <div className="absolute -inset-10 -z-10 rounded-full bg-blue-600/10 blur-[90px]" />

            <div className="hero-card relative overflow-hidden rounded-[28px] p-7 sm:p-9">
              <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border border-blue-300/10" />
              <div className="absolute -right-8 -top-12 h-48 w-48 rounded-full border border-blue-300/10" />

              <div className="relative flex items-center justify-between">
                <span className="text-xs font-bold tracking-[0.2em] text-slate-400">
                  DEVELOPER PROFILE
                </span>
                <Sparkles size={19} className="text-blue-300" />
              </div>

              <div className="relative mt-10 flex aspect-square max-h-[250px] items-center justify-center overflow-hidden rounded-3xl border border-blue-300/15 bg-gradient-to-br from-blue-500/20 via-slate-900 to-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(59,130,246,0.24),transparent_60%)]" />

                <div className="relative flex flex-col items-center">
                  <div className="flex h-28 w-28 items-center justify-center rounded-[30px] border border-blue-300/30 bg-blue-400/10 shadow-[0_0_60px_rgba(59,130,246,0.2)]">
                    <Code2 size={54} strokeWidth={1.2} className="text-blue-200" />
                  </div>
                  <span className="mt-5 text-xs font-bold tracking-[0.35em] text-blue-200/70">
                    M7DEV
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-[10px] tracking-widest text-slate-300">
                  DIGITAL CREATOR
                </div>
              </div>

              <div className="relative mt-7">
                <h2 className="text-2xl font-bold tracking-tight">
                  M7<span className="text-blue-400">DEV</span>
                </h2>
                <p className="mt-2 text-sm text-slate-400">
                  Full-Stack Developer · Software Developer
                </p>
              </div>

              <div className="relative mt-7 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/[0.035] p-3">
                  <Monitor size={18} className="text-blue-300" />
                  <p className="mt-3 text-xs font-semibold text-slate-200">
                    Web Development
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.035] p-3">
                  <Layers3 size={18} className="text-blue-300" />
                  <p className="mt-3 text-xs font-semibold text-slate-200">
                    Software Systems
                  </p>
                </div>
              </div>

              <div className="relative mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="text-xs text-slate-500">
                  DESIGN. DEVELOP. DEPLOY.
                </span>
                <span className="text-xs font-bold tracking-widest text-blue-300">
                  M7 / 001
                </span>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-5 top-24 hidden items-center gap-2 rounded-xl border border-white/10 bg-[#111a2b]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:flex"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/15 text-blue-300">
                <Code2 size={17} />
              </span>
              <span className="text-xs font-semibold text-slate-200">
                Clean Code
              </span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 9, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 bottom-32 hidden items-center gap-2 rounded-xl border border-white/10 bg-[#111a2b]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:flex"
            >
              <span className="status-dot" />
              <span className="text-xs font-semibold text-slate-200">
                Building the future
              </span>
            </motion.div>
          </motion.div>
        </div>

        <a
          href="#about"
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] tracking-[0.2em] text-slate-500 transition hover:text-blue-300 sm:flex"
        >
          SCROLL TO EXPLORE
          <ArrowDown size={16} />
        </a>
      </section>

      {/* Temporary section anchors for navigation */}
      <section id="about" className="site-container scroll-mt-28 py-20">
        <div className="section-line mb-16" />
        <p className="eyebrow">01 / ABOUT</p>
        <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
          Technology with <span className="blue-gradient">purpose.</span>
        </h2>
        <p className="mt-5 max-w-2xl leading-8 text-slate-400">
          I’m building digital experiences through software development,
          creative problem-solving, and a passion for useful technology.
          This section will feature my full story and background.
        </p>
      </section>

      <section id="projects" className="site-container scroll-mt-28 py-16">
        <div className="section-line mb-16" />
        <p className="eyebrow">02 / SELECTED WORK</p>
        <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
          Projects & <span className="blue-gradient">experiments.</span>
        </h2>
        <p className="mt-5 max-w-2xl leading-8 text-slate-400">
          A showcase of applications, websites, and systems I have worked on.
          The project gallery is coming in the next development stage.
        </p>
      </section>

      <section id="skills" className="site-container scroll-mt-28 py-16">
        <div className="section-line mb-16" />
        <p className="eyebrow">03 / TECHNOLOGY</p>
        <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
          Tools I <span className="blue-gradient">work with.</span>
        </h2>
        <p className="mt-5 max-w-2xl leading-8 text-slate-400">
          My technology stack and development skills will be organized here
          by category and experience.
        </p>
      </section>

      <section id="contact" className="site-container scroll-mt-28 py-20">
        <div className="section-line mb-16" />
        <p className="eyebrow">04 / GET IN TOUCH</p>
        <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
          Have a project in <span className="blue-gradient">mind?</span>
        </h2>
        <p className="mt-5 max-w-xl leading-8 text-slate-400">
          Let’s connect and explore how we can turn your ideas into digital
          experiences.
        </p>
        <a
          href="mailto:danielmuluken01@gmail.com"
          className="primary-button mt-8"
        >
          Contact Me <ArrowUpRight size={17} />
        </a>
      </section>

      {/* Footer */}
      <footer className="site-container pb-8 pt-5">
        <div className="section-line mb-7" />
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm font-bold tracking-tight">
            M7<span className="text-blue-400">DEV</span>
            <span className="ml-2 text-xs font-normal text-slate-500">
              BUILDING DIGITAL EXPERIENCES.
            </span>
          </p>
          <p className="text-xs text-slate-500">
            © 2026 M7DEV. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}