export const metadata = {
  title: 'About — Patrick Marx',
};

export default function AboutPage() {
  return (
    <div className='py-10'>
      <h1 className='text-2xl font-medium tracking-tight sm:text-3xl'>About</h1>
      <p className='text-foreground/70 mt-3 max-w-2xl'>
        I’m a software engineer focused on building clean, accessible, and
        performant web apps. I enjoy product thinking, design systems, and
        developer experience.
      </p>
      <h2 className='mt-8 text-xl font-medium tracking-tight'>Skills</h2>
      <ul className='mt-3 grid grid-cols-2 gap-2 text-sm sm:grid-cols-3'>
        {[
          'Next.js',
          'TypeScript',
          'React',
          'Tailwind CSS',
          'Node.js',
          'Design Systems',
        ].map(skill => (
          <li
            key={skill}
            className='border-foreground/10 text-foreground/70 rounded border px-3 py-2'
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
