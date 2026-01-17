'use client';

import BackgroundImage from '@/components/BackgroundImage';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/i18n';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function LoginPage() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        // Cookie wird serverseitig gesetzt, einfach weiterleiten
        router.push('/');
        router.refresh();
      } else {
        const data = await response.json();
        if (response.status === 429) {
          setError(t.login.rateLimit);
        } else {
          setError(data.error || t.login.wrongPassword);
        }
      }
    } catch (err) {
      setError(t.login.error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='relative'>
      <BackgroundImage />
      <div className='relative z-10 space-y-6'>
        <div className='flex items-start justify-between'>
          <div>
            <h1 className='text-xl leading-tight font-medium text-stone-900 dark:text-stone-100'>
              Patrick Marx
            </h1>
            <p className='text-stone-500 dark:text-stone-400'>
              {t.header.position}
            </p>
          </div>
          <div className='flex gap-1'>
            <button
              onClick={() => setLanguage('de')}
              className={`cursor-pointer rounded-full px-3 py-1 text-xs font-medium transition-all active:scale-[0.97] ${
                language === 'de'
                  ? 'bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900'
                  : 'bg-stone-200/50 text-stone-900 hover:scale-105 hover:bg-stone-300/60 dark:bg-stone-800/50 dark:text-stone-100 dark:hover:bg-stone-700/60'
              }`}
            >
              DE
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`cursor-pointer rounded-full px-3 py-1 text-xs font-medium transition-all active:scale-[0.97] ${
                language === 'en'
                  ? 'bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900'
                  : 'bg-stone-200/50 text-stone-900 hover:scale-105 hover:bg-stone-300/60 dark:bg-stone-800/50 dark:text-stone-100 dark:hover:bg-stone-700/60'
              }`}
            >
              EN
            </button>
          </div>
        </div>

        <form className='space-y-4' onSubmit={handleSubmit}>
          <div className='flex gap-2'>
            <label htmlFor='password' className='sr-only'>
              {t.login.password}
            </label>
            <input
              id='password'
              name='password'
              type='password'
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              className='flex-1 rounded-full border border-stone-300 bg-stone-50 px-4 py-2 text-stone-900 placeholder-stone-400 focus:border-violet-200 focus:ring-2 focus:ring-violet-200 focus:outline-none dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100 dark:placeholder-stone-500 dark:focus:border-violet-200 dark:focus:ring-violet-200'
              placeholder={t.login.password}
              autoFocus
            />
            <button
              type='submit'
              disabled={isLoading}
              className='inline-flex items-center gap-2 rounded-full bg-stone-900 px-4 py-2 font-medium text-stone-100 transition-all hover:translate-x-1 hover:bg-stone-800 active:scale-[0.97] disabled:opacity-50 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200'
            >
              <span>{isLoading ? t.login.checking : t.login.login}</span>
              <svg
                className='h-4 w-4 text-stone-700 dark:text-stone-300'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </button>
          </div>

          {error && (
            <div className='rounded-lg bg-red-50 p-3 text-sm text-red-800 dark:bg-red-900/20 dark:text-red-300'>
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
