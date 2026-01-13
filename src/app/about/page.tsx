import { Badge } from '@/components/ui/badge';

export const metadata = {
  title: 'About — Patrick Marx',
};

export default function AboutPage() {
  return (
    <div className='space-y-20'>
      <section>
        <h1>About</h1>
        <p className='mt-6 max-w-2xl'>
          I'm a software engineer focused on building clean, accessible, and
          performant web apps. I enjoy product thinking, design systems, and
          developer experience.
        </p>
      </section>

      <section>
        <h2 className='mb-4'>Skills</h2>
        <div className='flex flex-wrap gap-2'>
          {[
            'Next.js',
            'TypeScript',
            'React',
            'Tailwind CSS',
            'Node.js',
            'Design Systems',
          ].map(skill => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </section>
    </div>
  );
}
