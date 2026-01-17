'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className='mb-4 flex justify-end gap-1'>
      <button
        onClick={() => setLanguage('de')}
        className={`cursor-pointer rounded-full px-3 py-1 text-xs font-medium transition-all active:scale-[0.97] ${
          language === 'de'
            ? 'bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900'
            : 'bg-stone-200 text-stone-900 hover:scale-105 hover:bg-stone-300 dark:bg-stone-800 dark:text-stone-100 dark:hover:bg-stone-700'
        }`}
      >
        DE
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`cursor-pointer rounded-full px-3 py-1 text-xs font-medium transition-all active:scale-[0.97] ${
          language === 'en'
            ? 'bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900'
            : 'bg-stone-200 text-stone-900 hover:scale-105 hover:bg-stone-300 dark:bg-stone-800 dark:text-stone-100 dark:hover:bg-stone-700'
        }`}
      >
        EN
      </button>
    </div>
  );
}
