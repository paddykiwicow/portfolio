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
          Ich arbeite als Product Designer an digitalen Produkten, die über Zeit
          wachsen und genutzt werden. Mich interessieren vor allem Struktur,
          Verständlichkeit und der Umgang mit komplexen Systemen im Alltag.
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
            'Figma',
            'Design Systems',
          ].map(skill => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </section>
    </div>
  );
}
