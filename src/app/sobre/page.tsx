'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SobrePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-24 px-6 relative">
      <div className="container mx-auto max-w-4xl relative">
        <motion.h1
          className="text-4xl md:text-6xl font-serif font-bold mb-6 text-slate-900 dark:text-pm-accent tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t('about.title')}
        </motion.h1>

        {/* TOC inline */}
        <motion.nav
          aria-label={t('about.toc.label')}
          className="mb-10 flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          {[
            { href: '#pillars', label: t('about.toc.pillars') },
            { href: '#experience', label: t('about.toc.experience') },
            { href: '#philosophy', label: t('about.toc.philosophy') },
            { href: '#stack', label: t('about.toc.stack') },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-1.5 rounded-full text-xs uppercase tracking-wider border border-slate-900/15 dark:border-pm-border glass text-slate-600 dark:text-pm-muted hover:border-slate-900 dark:hover:border-pm-accent/60 hover:text-slate-900 dark:hover:text-pm-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
        </motion.nav>

        <motion.div
          className="space-y-8 text-base text-gray-700 dark:text-pm-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {/* Introdução */}
          <section className="space-y-5 relative">
            <div className="absolute -left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-900 via-slate-700 to-transparent dark:from-pm-accent dark:via-pm-accent/50 dark:to-transparent opacity-30 dark:opacity-30" />

            <p className="text-lg leading-relaxed text-gray-700 dark:text-pm-muted">
              {t('about.chapter.p1')}
            </p>

            <p className="text-base leading-relaxed text-gray-700 dark:text-pm-muted">
              {t('about.chapter.p2')}
            </p>

            <div className="pt-3 space-y-3 text-base leading-relaxed text-gray-700 dark:text-pm-muted italic border-l-2 border-slate-900/50 dark:border-pm-accent/50 pl-4">
              {t('about.chapter.p3').split('\\n\\n').map((paragraph, i) => (
                <p key={i}>{paragraph.split('\\n').map((line, j) => (
                  <span key={j}>{line}<br /></span>
                ))}</p>
              ))}
            </div>
          </section>

          {/* Como Trabalho */}
          <section id="pillars" className="space-y-6 mt-20 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-pm-text mb-4 border-b-2 border-slate-900/20 dark:border-pm-accent/30 pb-2 tracking-tight">
              {t('about.pillars.title')}
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              <motion.div
                className="border-l-2 border-pm-accent/30 pl-6 hover:border-pm-accent/60 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-pm-accent mb-2 dark:group-hover:text-pm-accent-h transition-colors">{t('about.pillar.docs.title')}</h3>
                <div className="text-sm text-gray-700 dark:text-pm-muted space-y-1">
                  {t('about.pillar.docs.desc').split('\\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="border-l-2 border-pm-accent/30 pl-6 hover:border-pm-accent/60 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-pm-accent mb-2 dark:group-hover:text-pm-accent-h transition-colors">{t('about.pillar.modular.title')}</h3>
                <div className="text-sm text-gray-700 dark:text-pm-muted space-y-1">
                  {t('about.pillar.modular.desc').split('\\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="border-l-2 border-pm-accent/30 pl-6 hover:border-pm-accent/60 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-pm-accent mb-2 dark:group-hover:text-pm-accent-h transition-colors">{t('about.pillar.backend.title')}</h3>
                <div className="text-sm text-gray-700 dark:text-pm-muted space-y-1">
                  {t('about.pillar.backend.desc').split('\\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="border-l-2 border-pm-accent/30 pl-6 hover:border-pm-accent/60 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-pm-accent mb-2 dark:group-hover:text-pm-accent-h transition-colors">{t('about.pillar.automation.title')}</h3>
                <div className="text-sm text-gray-700 dark:text-pm-muted space-y-1">
                  {t('about.pillar.automation.desc').split('\\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="border-l-2 border-pm-accent/30 pl-6 hover:border-pm-accent/60 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-pm-accent mb-2 dark:group-hover:text-pm-accent-h transition-colors">{t('about.pillar.systems.title')}</h3>
                <div className="text-sm text-gray-700 dark:text-pm-muted space-y-1">
                  {t('about.pillar.systems.desc').split('\\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="border-l-2 border-pm-accent/30 pl-6 hover:border-pm-accent/60 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-pm-accent mb-2 dark:group-hover:text-pm-accent-h transition-colors">{t('about.pillar.dataeng.title')}</h3>
                <div className="text-sm text-gray-700 dark:text-pm-muted space-y-1">
                  {t('about.pillar.dataeng.desc').split('\\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Experiência */}
          <section id="experience" className="space-y-6 mt-20 scroll-mt-24">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-1 h-10 bg-gradient-to-b from-slate-900 dark:from-pm-accent to-transparent" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-pm-accent tracking-tight">
                {t('about.experience.title')}
              </h2>
            </div>

            <div className="border-l-2 border-slate-900/20 dark:border-pm-accent/30 pl-5 py-3">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-pm-text">
                  {t('about.experience.position')}
                </h3>
                <span className="text-xs text-gray-500 dark:text-pm-muted">{t('about.experience.period')}</span>
              </div>
              <p className="text-xs text-amber-800 dark:text-pm-accent mb-3 italic">{t('about.experience.subtitle')}</p>

              <ul className="space-y-1.5 text-gray-700 dark:text-pm-muted text-sm">
                <li className="flex gap-2">
                  <span className="text-amber-800 dark:text-pm-accent mt-1">→</span>
                  <span>{t('about.experience.achievement1')}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-800 dark:text-pm-accent mt-1">→</span>
                  <span>{t('about.experience.achievement2')}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-800 dark:text-pm-accent mt-1">→</span>
                  <span>{t('about.experience.achievement3')}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-800 dark:text-pm-accent mt-1">→</span>
                  <span>{t('about.experience.achievement4')}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-800 dark:text-pm-accent mt-1">→</span>
                  <span>{t('about.experience.achievement5')}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-800 dark:text-pm-accent mt-1">→</span>
                  <span>{t('about.experience.achievement6')}</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Filosofia */}
          <section id="philosophy" className="space-y-6 mt-20 scroll-mt-24">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-1 h-10 bg-gradient-to-b from-slate-900 dark:from-pm-accent to-transparent" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-pm-accent tracking-tight">
                {t('about.philosophy.title')}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <motion.div
                className="p-5 bg-gradient-to-br from-white via-white to-slate-50 dark:from-pm-accent/5 dark:via-transparent dark:to-transparent rounded-xl border border-slate-900/[0.08] dark:border-pm-accent/20 glass shadow-[-6px_6px_18px_-8px_rgba(15,23,42,0.10),0_18px_36px_-16px_rgba(15,23,42,0.14)] dark:shadow-none hover:border-slate-900/20 dark:hover:border-pm-accent/40 transition-all group"
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-pm-accent mb-2 dark:group-hover:text-pm-accent-h transition-colors">{t('about.philosophy.fear.title')}</h3>
                <p className="text-sm text-gray-700 dark:text-pm-muted">
                  {t('about.philosophy.fear.text')}
                </p>
              </motion.div>

              <motion.div
                className="p-5 bg-gradient-to-br from-white via-white to-slate-50 dark:from-pm-accent/5 dark:via-transparent dark:to-transparent rounded-xl border border-slate-900/[0.08] dark:border-pm-accent/20 glass shadow-[-6px_6px_18px_-8px_rgba(15,23,42,0.10),0_18px_36px_-16px_rgba(15,23,42,0.14)] dark:shadow-none hover:border-slate-900/20 dark:hover:border-pm-accent/40 transition-all group"
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-pm-accent mb-2 dark:group-hover:text-pm-accent-h transition-colors">{t('about.philosophy.dream.title')}</h3>
                <p className="text-sm text-gray-700 dark:text-pm-muted">
                  {t('about.philosophy.dream.text')}
                </p>
              </motion.div>

              <motion.div
                className="p-5 bg-gradient-to-br from-white via-white to-slate-50 dark:from-pm-accent/5 dark:via-transparent dark:to-transparent rounded-xl border border-slate-900/[0.08] dark:border-pm-accent/20 glass shadow-[-6px_6px_18px_-8px_rgba(15,23,42,0.10),0_18px_36px_-16px_rgba(15,23,42,0.14)] dark:shadow-none hover:border-slate-900/20 dark:hover:border-pm-accent/40 transition-all group"
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-pm-accent mb-2 dark:group-hover:text-pm-accent-h transition-colors">{t('about.philosophy.joy.title')}</h3>
                <p className="text-sm text-gray-700 dark:text-pm-muted">
                  {t('about.philosophy.joy.text')}
                </p>
              </motion.div>

              <motion.div
                className="p-5 bg-gradient-to-br from-white via-white to-slate-50 dark:from-pm-accent/5 dark:via-transparent dark:to-transparent rounded-xl border border-slate-900/[0.08] dark:border-pm-accent/20 glass shadow-[-6px_6px_18px_-8px_rgba(15,23,42,0.10),0_18px_36px_-16px_rgba(15,23,42,0.14)] dark:shadow-none hover:border-slate-900/20 dark:hover:border-pm-accent/40 transition-all group"
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-pm-accent mb-2 dark:group-hover:text-pm-accent-h transition-colors">{t('about.philosophy.fight.title')}</h3>
                <p className="text-sm text-gray-700 dark:text-pm-muted">
                  {t('about.philosophy.fight.text')}
                </p>
              </motion.div>
            </div>
          </section>

          {/* Stack & Ferramentas */}
          <section id="stack" className="space-y-6 mt-20 scroll-mt-24">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-1 h-10 bg-gradient-to-b from-amber-800 dark:from-pm-accent to-transparent" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-pm-accent tracking-tight">
                {t('about.stack.title')}
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 my-6">
              {[
                'Node.js',
                'TypeScript',
                'JavaScript',
                'PostgreSQL',
                'MySQL',
                'Express',
                'Fastify',
                'Next.js',
                'React',
                'Git',
                'Docker',
                'Postman',
              ].map((tech) => (
                <motion.div
                  key={tech}
                  className="p-2.5 bg-white dark:bg-white/5 rounded-lg text-center text-slate-700 dark:text-pm-muted border border-slate-900/[0.08] dark:border-transparent shadow-[-4px_4px_12px_-6px_rgba(15,23,42,0.10)] dark:shadow-none hover:border-slate-900/20 hover:bg-slate-50 dark:hover:bg-pm-accent/10 dark:hover:border-transparent transition-all dark:cosmic-glow text-xs md:text-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </section>

          {/* Assinatura */}
          <div className="mt-20 p-6 bg-gradient-to-r from-white via-white to-slate-50 dark:from-pm-accent/[0.06] dark:via-transparent dark:to-transparent rounded-2xl border border-slate-900/[0.08] dark:border-pm-border shadow-[-8px_8px_24px_-8px_rgba(15,23,42,0.12),0_24px_48px_-16px_rgba(15,23,42,0.16)] dark:shadow-none">
            <p className="text-base font-light text-center leading-relaxed italic text-slate-700 dark:text-pm-muted">
              {t('about.quote.line1')}<br />
              {t('about.quote.line2')}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
