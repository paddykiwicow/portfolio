'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ReactNode } from 'react';

interface LanguageTransitionProps {
  children: ReactNode;
}

export default function LanguageTransition({
  children,
}: LanguageTransitionProps) {
  const { displayLanguage } = useLanguage();

  return (
    <AnimatePresence mode='wait' initial={false}>
      <motion.div
        key={displayLanguage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
