'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Abby() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth < 768 ||
          /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          )
      );
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isLightboxOpen) {
        setIsLightboxOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  return (
    <article>
      <motion.h1
        className='text-3xl font-medium tracking-tight'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Abby AI Career Companion
      </motion.h1>

      <motion.p
        className='text-foreground/70 mt-3'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        AI-powered career guidance for Gen Z – transforming a job board into a
        personalized apprenticeship companion in just one week sprint.
      </motion.p>

      {/* Hero Image/Video Section */}
      <motion.div
        className='mt-8 flex justify-center'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className='relative'>
          <img
            src='/images/projects/abby/abby_title.png'
            alt='Abby Chat Interface across multiple screens'
            className='h-auto w-full max-w-2xl rotate-1 rounded-2xl border-2 border-white shadow-2xl transition-transform duration-300 hover:rotate-0 dark:border-stone-800'
          />
        </div>
      </motion.div>

      <h2 className='mt-12 text-lg font-medium tracking-tight'>Problem</h2>
      <p className='text-foreground/70 mt-3'>
        <span className='font-semibold'>
          Apprenticeships have an image problem with Gen Z.
        </span>{' '}
        While 68% of graduates want to study, apprenticeship positions remain
        unfilled. Traditional career guidance no longer reaches young people:
        bureaucratic, static, impersonal.
      </p>

      <h2 className='mt-8 text-lg font-medium tracking-tight'>
        Design Challenge
      </h2>
      <p className='text-foreground/70 mt-3'>
        How do we transform Ausbildung.de from an SEO-driven job board into a
        <span className='font-semibold'>personalized AI companion</span> that
        guides Gen Z through their entire career discovery journey?
      </p>

      {/* Process Section with Whiteboard Images */}
      <h2 className='mt-12 text-lg font-medium tracking-tight'>
        Sprint Process
      </h2>
      <div className='mt-6 flex justify-center'>
        <div className='group relative'>
          <motion.img
            src='/images/projects/abby/abby_content-1.jpg'
            alt='Design Sprint Whiteboard Sketches'
            className='aspect-[16/9] h-auto w-full max-w-2xl cursor-pointer rounded-2xl border-2 border-white object-cover object-center shadow-2xl transition-all duration-300 group-hover:rotate-0 dark:border-stone-800'
            style={{ transform: 'rotate(1deg)' }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              if (!isMobile) {
                console.log('Image clicked!');
                setIsLightboxOpen(true);
              }
            }}
          />
          {/* Clickable overlay for better touch support */}
          {!isMobile && (
            <div
              className='absolute inset-0 cursor-pointer'
              onClick={() => {
                console.log('Overlay clicked!');
                setIsLightboxOpen(true);
              }}
            />
          )}
        </div>
      </div>
      <p className='text-foreground/60 mt-3 text-center text-sm'>
        Day 1-2: Analog Ideation & User Journey Mapping
      </p>

      <h2 className='mt-12 text-lg font-medium tracking-tight'>
        Strategic Design Decision
      </h2>
      <p className='text-foreground/70 mt-3'>
        <span className='font-semibold'>Beyond the Chatbot Trap:</span> Abby
        isn't just a chat interface, but the AI DNA of the entire platform.
        Contextual intelligence across all touchpoints.
      </p>

      {/* Key Screens Section */}
      <h2 className='mt-12 text-lg font-medium tracking-tight'>
        Key Interactions
      </h2>

      <div className='mt-6 space-y-8'>
        {/* Chat Onboarding */}
        <div className='grid grid-cols-1 items-center gap-6 lg:grid-cols-2'>
          <div>
            <h3 className='text-lg font-medium'>Contextual Onboarding</h3>
            <p className='text-foreground/60 mt-2 text-sm'>
              Abby doesn't start from zero – she knows the context of the
              current career page and can immediately offer targeted support.
            </p>
          </div>
          <video
            src='/images/projects/abby/abby_prototype-1.mp4'
            controls
            preload='metadata'
            className='mx-auto w-full max-w-sm rounded-2xl border-2 border-white shadow-2xl dark:border-stone-800'
            poster='/images/projects/abby/abby_prototype-1_thumbnail.jpg'
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Interactive Quiz */}
        <div className='grid grid-cols-1 items-center gap-6 lg:grid-cols-2'>
          <img
            src='/images/abby-quiz.jpg'
            alt='Interactive Career Quiz'
            className='mx-auto w-full max-w-sm rounded-lg border shadow-sm lg:order-first'
          />
          <div>
            <h3 className='text-lg font-medium'>Gamified Assessment</h3>
            <p className='text-foreground/60 mt-2 text-sm'>
              Career guidance becomes a playful experience. Quiz content adapts
              dynamically to previous answers.
            </p>
          </div>
        </div>

        {/* Personalized Suggestions */}
        <div className='grid grid-cols-1 items-center gap-6 lg:grid-cols-2'>
          <div>
            <h3 className='text-lg font-medium'>Smart Recommendations</h3>
            <p className='text-foreground/60 mt-2 text-sm'>
              Based on interests and behavior, Abby suggests matching career
              fields – with direct action options.
            </p>
          </div>
          <video
            src='/images/projects/abby/abby_prototype-2.mp4'
            controls
            preload='metadata'
            className='mx-auto w-full max-w-sm rounded-2xl border-2 border-white shadow-2xl dark:border-stone-800'
            poster='/images/projects/abby/abby_prototype-2-thumbnail.jpg'
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Design System Section */}
      <h2 className='mt-12 text-lg font-medium tracking-tight'>
        Visual Design
      </h2>
      <div className='mt-6 grid grid-cols-2 gap-4 md:grid-cols-4'>
        <div className='rounded-lg bg-purple-100 p-4 text-center dark:bg-purple-900/20'>
          <div className='mb-2 h-16 w-full rounded-lg bg-purple-400'></div>
          <p className='text-sm'>Friendly & Accessible</p>
        </div>
        <div className='rounded-lg bg-blue-100 p-4 text-center dark:bg-blue-900/20'>
          <div className='mb-2 h-16 w-full rounded-lg bg-blue-400'></div>
          <p className='text-sm'>Trustworthy</p>
        </div>
        <div className='rounded-lg bg-green-100 p-4 text-center dark:bg-green-900/20'>
          <div className='mb-2 h-16 w-full rounded-lg bg-green-400'></div>
          <p className='text-sm'>Positive & Motivating</p>
        </div>
        <div className='rounded-lg bg-orange-100 p-4 text-center dark:bg-orange-900/20'>
          <div className='mb-2 h-16 w-full rounded-lg bg-orange-400'></div>
          <p className='text-sm'>Playful</p>
        </div>
      </div>

      <h2 className='mt-12 text-lg font-medium tracking-tight'>
        Impact & Results
      </h2>
      <ul className='text-foreground/70 mt-3 list-disc space-y-1 pl-5'>
        <li>
          <span className='font-semibold'>Strategic Success:</span> Convinced
          C-level stakeholders of AI-first product vision
        </li>
        <li>
          <span className='font-semibold'>Design Leadership:</span> Mockups
          became the visual DNA of the final product
        </li>
        <li>
          <span className='font-semibold'>Technical Foundation:</span> Abby goes
          into beta next week with 100,000+ expected users
        </li>
        <li>
          <span className='font-semibold'>Cultural Shift:</span> From SEO
          content to personalized user experience
        </li>
      </ul>

      <h2 className='mt-8 text-lg font-medium tracking-tight'>Key Learnings</h2>
      <ul className='text-foreground/70 mt-3 list-disc space-y-1 pl-5'>
        <li>
          <span className='font-semibold'>AI Design Complexity:</span> Trust and
          transparency are fundamental, not afterthoughts
        </li>
        <li>
          <span className='font-semibold'>Rapid Visual Execution:</span> Hi-fi
          mockups gave the concept necessary credibility
        </li>
        <li>
          <span className='font-semibold'>Cross-functional Leadership:</span>{' '}
          Coordinated senior stakeholders toward radical innovation
        </li>
      </ul>

      <h2 className='mt-8 text-lg font-medium tracking-tight'>
        Tools & Methods
      </h2>
      <ul className='text-foreground/70 mt-3 list-disc space-y-1 pl-5'>
        <li>Figma (Prototyping & Design System)</li>
        <li>ChatGPT & v0 (AI-assisted Design)</li>
        <li>User Journey Mapping</li>
        <li>Design Sprint Methodology</li>
      </ul>

      {/* Optional: Prototype/Demo Section */}
      <div className='bg-muted/30 mt-12 rounded-lg border border-dashed p-6'>
        <h3 className='mb-3 text-lg font-medium'>Interactive Prototype</h3>
        <p className='text-foreground/60 mb-4 text-sm'>
          Experience Abby's interactions in the functional prototype
        </p>
        <button className='bg-primary text-primary-foreground rounded-lg px-4 py-2 text-sm font-medium'>
          Open Prototype →
        </button>
      </div>

      {/* Sleek Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            className='fixed inset-0 z-50 flex items-center justify-center'
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Close button */}
            <motion.button
              className='bg-opacity-10 hover:bg-opacity-20 absolute top-6 right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-light text-white transition-all duration-200'
              style={{
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
              }}
              onClick={() => setIsLightboxOpen(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              ×
            </motion.button>

            {/* Image container */}
            <motion.div
              className='relative max-h-[80vh] max-w-[90vw] p-4'
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{
                type: 'spring',
                damping: 25,
                stiffness: 300,
                duration: 0.4,
              }}
              onClick={e => e.stopPropagation()}
            >
              <motion.img
                src='/images/projects/abby/abby_content-1_large.jpg'
                alt='Design Sprint Whiteboard Sketches - Full Size'
                className='max-h-full max-w-full rounded-lg object-contain shadow-2xl'
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.1}
                whileDrag={{ scale: 1.05 }}
              />
            </motion.div>

            {/* Subtle hint text */}
            <motion.div
              className='absolute bottom-6 left-1/2 -translate-x-1/2 transform rounded-full bg-black/50 px-3 py-1 text-sm font-light text-white backdrop-blur-sm'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Click outside or press ESC to close
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
