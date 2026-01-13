import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Abby',
    description:
      'AI-powered career guidance for Gen Z – transforming a job board into a personalized apprenticeship companion in just one week sprint.',
    internalPath: '/projects/abby',
    image: '/images/projects/abby/abby_title.png',
    tech: ['Figma', 'Design Sprint', 'AI Design'],
    tag: 'design',
    date: '2024',
  },
  {
    title: 'Mobile Apply Redesign',
    description:
      "Transforming Ausbildung.de's core conversion funnel from form hell to app-like magic — 30,000 monthly users, 2-week sprint, zero compromise on experience.",
    internalPath: '/projects/mobile-apply-redesign',
    image: '/images/projects/abby/abby_title.png',
    tech: ['UX Design', 'React', 'Framer Motion'],
    tag: 'design',
    date: '2024',
  },
  {
    title: 'Design Token Infrastructure',
    description:
      'Skalierbare, automatisierte Pipeline für Design Tokens über Marken und Produkte hinweg – mit Versionierung, Validierung und Distribution in mehrere Plattformen.',
    internalPath: '/projects/design-tokens',
    image: '/images/projects/mobile-apply/mobile-apply_1.png',
    tech: ['Style Dictionary', 'Figma Tokens', 'GitHub Actions'],
    tag: 'design',
    date: '2023',
  },
  {
    title: 'Personal Portfolio',
    description: 'Modern Next.js portfolio with TypeScript and Tailwind.',
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/yourname/portfolio',
    image: '/images/projects/abby/abby_title.png',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    tag: 'web',
    date: '2024',
  },
  {
    title: 'Open Source CLI',
    description: 'Developer productivity CLI with plugin system.',
    repoUrl: 'https://github.com/yourname/oss-cli',
    image: '/images/projects/mobile-apply/mobile-apply_2.png',
    tech: ['Node.js', 'TypeScript'],
    tag: 'opensource',
    date: '2023',
  },
  {
    title: 'Mobile Fitness App',
    description: 'React Native app for workouts and progress tracking.',
    liveUrl: 'https://example.com/app',
    image: '/images/projects/mobile-apply/mobile-apply_3.png',
    tech: ['React Native', 'Expo'],
    tag: 'mobile',
    date: '2023',
  },
];
