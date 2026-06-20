'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    const handleOutsideClick = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [mobileMenuOpen]);

  const navItems = [
    {
      href: '/',
      label: t('nav.home'),
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      href: '/sobre',
      label: t('nav.about'),
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      href: '/projetos',
      label: t('nav.projects'),
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      )
    },
  ];

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-white/80 dark:bg-pm-bg/90 border-b border-slate-900/10 dark:border-pm-border shadow-[0_4px_20px_-4px_rgba(15,23,42,0.08)] dark:shadow-lg dark:shadow-black/30'
          : 'backdrop-blur-md bg-white/60 dark:bg-pm-bg/60 border-b border-slate-900/[0.06] dark:border-pm-border'
      }`}
    >
      {/* Elementos geométricos de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Linha horizontal tech */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-900/20 dark:via-pm-accent/20 to-transparent"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />

        {/* Hexágono decorativo */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 w-8 h-8 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-slate-700 dark:text-pm-accent"
            />
          </svg>
        </div>

        {/* Círculo com pulse */}
        <motion.div
          className="absolute left-1/3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-amber-900/40 dark:bg-pm-accent/40"
          animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      <nav className="container mx-auto px-6 py-3 flex items-center justify-between relative">
        <Link href="/">
          <motion.div
            className="flex items-center gap-3 relative group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Logo tech com camadas */}
            <div className="relative w-12 h-12">
              {/* Anel externo com rotação */}
              <motion.div
                className="absolute inset-0 rounded-lg"
                style={{
                  background: 'linear-gradient(135deg, rgba(53, 127, 204, 0.3), rgba(63, 143, 234, 0.15))',
                  padding: '2px',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-lg bg-white/80 dark:bg-pm-bg/80 backdrop-blur-sm" />
              </motion.div>

              {/* Conteúdo do logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="block text-sm font-bold text-slate-900 dark:text-pm-text">
                    JP
                  </span>
                  <motion.div
                    className="w-4 h-[2px] mx-auto bg-slate-900 dark:bg-pm-accent mt-0.5"
                    animate={{ scaleX: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute -inset-2 bg-pm-accent/0 group-hover:bg-pm-accent/10 rounded-lg blur-xl transition-all duration-500 -z-10" />
            </div>

            <div>
              <p className="text-xl font-bold text-slate-900 dark:text-pm-text leading-tight tracking-tight">
                João Paulo Pereira
              </p>
              <p className="text-[10px] text-slate-500 dark:text-pm-muted font-mono tracking-wider">
                FULL STACK DEV
              </p>
            </div>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link href={item.href} aria-current={isActive ? 'page' : undefined}>
                  <motion.div
                    className={`relative px-4 py-2 rounded-lg overflow-hidden group ${
                      isActive ? 'text-slate-900 dark:text-pm-text' : 'text-slate-600 dark:text-pm-muted hover:text-slate-900 dark:hover:text-pm-text'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Background gradient on active */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-slate-900/[0.06] dark:bg-pm-accent/10 rounded-lg border border-slate-900/15 dark:border-pm-accent/30"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}

                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/[0.04] dark:group-hover:bg-pm-accent/8 rounded-lg transition-all duration-300" />

                    <span className="relative flex items-center gap-2 text-sm font-medium">
                      {item.icon}
                      {item.label}
                    </span>
                  </motion.div>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Actions container */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />

          {/* GitHub Link */}
          <motion.a
            href="https://github.com/jpcamargoo"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-900/[0.04] dark:bg-pm-surface hover:bg-slate-900/[0.08] dark:hover:bg-pm-accent/10 border border-slate-900/10 dark:border-pm-border dark:hover:border-pm-accent/30 text-slate-700 dark:text-pm-muted hover:text-slate-900 dark:hover:text-pm-text transition-all"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </motion.a>
        </div>

        {/* Mobile: tema e idioma visíveis antes do hamburger */}
        <div className="md:hidden flex items-center gap-1 mr-1">
          <LanguageToggle />
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 rounded-lg bg-slate-900/[0.04] dark:bg-pm-surface border border-slate-900/10 dark:border-pm-border text-slate-700 dark:text-pm-muted hover:text-slate-900 dark:hover:text-pm-text hover:bg-slate-900/[0.08] dark:hover:bg-pm-accent/10 transition-all"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-haspopup="menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-menu"
            className="md:hidden absolute top-full left-0 right-0 backdrop-blur-xl bg-white/95 dark:bg-pm-surface border-b border-slate-900/10 dark:border-pm-border shadow-2xl shadow-slate-900/[0.08] dark:shadow-black/45 overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Elementos decorativos no menu mobile */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-40 h-40 bg-slate-900/[0.03] dark:bg-pm-accent/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-amber-900/[0.03] dark:bg-pm-accent/5 rounded-full blur-3xl" />
            </div>

            <ul className="container mx-auto px-6 py-6 space-y-2 relative">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? 'page' : undefined}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <motion.div
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg border transition-all ${
                          isActive
                            ? 'bg-slate-900/[0.06] border-slate-900/20 text-slate-900 dark:bg-pm-accent/10 dark:border-pm-accent/40 dark:text-pm-text'
                            : 'bg-slate-900/[0.03] border-slate-900/10 text-slate-700 hover:bg-slate-900/[0.06] hover:border-slate-900/20 hover:text-slate-900 dark:bg-pm-bg/50 dark:border-pm-border dark:text-pm-muted dark:hover:bg-pm-accent/10 dark:hover:border-pm-accent/30 dark:hover:text-pm-text'
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {item.icon}
                        <span className="text-lg font-medium">{item.label}</span>
                        {isActive && (
                          <motion.div
                            className="ml-auto w-2 h-2 rounded-full bg-slate-900 dark:bg-pm-accent"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        )}
                      </motion.div>
                    </Link>
                  </li>
                );
              })}

              {/* Divider */}
              <li className="list-none" aria-hidden="true">
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="h-[1px] bg-gradient-to-r from-transparent via-slate-900/20 dark:via-pm-accent/20 to-transparent my-4"
                />
              </li>

              {/* Theme Toggle, Language e GitHub no mobile */}
              <li>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (navItems.length + 1) * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <a
                    href="https://github.com/jpcamargoo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 rounded-lg bg-slate-900/[0.04] border border-slate-900/10 text-slate-700 hover:bg-slate-900/[0.08] hover:border-slate-900/20 hover:text-slate-900 dark:bg-pm-bg/50 dark:border-pm-border dark:text-pm-muted dark:hover:bg-pm-accent/10 dark:hover:border-pm-accent/30 dark:hover:text-pm-text transition-all flex items-center gap-2"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <span className="text-sm font-medium">GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/joao-pdpc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 rounded-lg bg-slate-900/[0.04] border border-slate-900/10 text-slate-700 hover:bg-slate-900/[0.08] hover:border-slate-900/20 hover:text-slate-900 dark:bg-pm-bg/50 dark:border-pm-border dark:text-pm-muted dark:hover:bg-pm-accent/10 dark:hover:border-pm-accent/30 dark:hover:text-pm-text transition-all flex items-center gap-2"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                </motion.div>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
