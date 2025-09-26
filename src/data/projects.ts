import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Abby',
    description:
      'KI-gestützte Berufsorientierung für Gen Z – von der Job-Börse zum personalisierten Ausbildungsbegleiter.',
    internalPath: '/projects/abby',
    tech: ['Figma', 'Design Sprint', 'AI Design'],
    tag: 'design',
  },
  {
    title: 'Personal Portfolio',
    description: 'Modern Next.js portfolio with TypeScript and Tailwind.',
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/yourname/portfolio',
    image: '/next.svg',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    tag: 'web',
  },
  {
    title: 'Open Source CLI',
    description: 'Developer productivity CLI with plugin system.',
    repoUrl: 'https://github.com/yourname/oss-cli',
    image: '/vercel.svg',
    tech: ['Node.js', 'TypeScript'],
    tag: 'opensource',
  },
  {
    title: 'Mobile Fitness App',
    description: 'React Native app for workouts and progress tracking.',
    liveUrl: 'https://example.com/app',
    tech: ['React Native', 'Expo'],
    tag: 'mobile',
  },
  {
    title: 'Design Token Infrastructure',
    description:
      'Skalierbare Design-Token-Pipeline für Marken- und Produkt-Teams.',
    internalPath: '/projects/design-tokens',
    tech: ['Style Dictionary', 'Figma Tokens', 'GitHub Actions'],
    tag: 'design',
  },
];
