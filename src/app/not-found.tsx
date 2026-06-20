'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-16 relative">
      <div className="scan-line" />
      <div className="relative w-full max-w-2xl text-center rounded-2xl border border-slate-900/10 dark:border-pm-border bg-white/80 dark:bg-pm-surface/80 backdrop-blur-lg p-8">
        <p className="text-sm uppercase tracking-[0.2em] text-blue-600 dark:text-pm-accent mb-3">404</p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-900 dark:text-pm-accent">
          {t('notFound.title')}
        </h1>
        <p className="text-gray-700 dark:text-pm-muted mb-8">{t('notFound.description')}</p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-slate-900 dark:bg-pm-accent text-white font-medium hover:opacity-90 transition-opacity"
        >
          {t('notFound.backHome')}
        </Link>
      </div>
    </div>
  );
}
