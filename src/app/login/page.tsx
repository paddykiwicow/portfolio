'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
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
        setError(data.error || 'Falsches Passwort');
      }
    } catch (err) {
      setError('Ein Fehler ist aufgetreten');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='space-y-6'>
      <div>
        <h1>Login</h1>
        <p className='mt-4 text-stone-500 dark:text-stone-400'>
          Bitte geben Sie das Passwort ein, um auf das Portfolio zuzugreifen.
        </p>
      </div>

      <form className='space-y-4' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='password' className='sr-only'>
            Passwort
          </label>
          <input
            id='password'
            name='password'
            type='password'
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            className='w-full rounded-lg border border-stone-300 bg-stone-50 px-4 py-2 text-stone-900 placeholder-stone-400 focus:border-stone-400 focus:ring-2 focus:ring-stone-300 focus:outline-none dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100 dark:placeholder-stone-500 dark:focus:border-stone-600 dark:focus:ring-stone-700'
            placeholder='Passwort'
            autoFocus
          />
        </div>

        {error && (
          <div className='rounded-lg bg-red-50 p-3 text-sm text-red-800 dark:bg-red-900/20 dark:text-red-300'>
            {error}
          </div>
        )}

        <div>
          <button
            type='submit'
            disabled={isLoading}
            className='inline-flex items-center justify-center rounded-full bg-stone-900 px-4 py-2 font-medium text-stone-100 transition-all hover:bg-stone-800 disabled:opacity-50 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200'
          >
            {isLoading ? 'Wird geprüft...' : 'Anmelden'}
          </button>
        </div>
      </form>
    </div>
  );
}
