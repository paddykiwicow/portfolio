import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types/project';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className='group border-foreground/10 bg-background/60 rounded-xl border p-4 backdrop-blur transition hover:shadow-sm'>
      {project.image ? (
        <div className='border-foreground/10 relative mb-3 h-40 w-full overflow-hidden rounded-lg border'>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className='object-contain p-4 transition-transform duration-300 group-hover:scale-[1.02]'
            priority={false}
          />
        </div>
      ) : null}
      <div className='flex items-start justify-between gap-2'>
        <h3 className='font-medium tracking-tight'>{project.title}</h3>
        <span className='border-foreground/10 text-foreground/60 rounded-full border px-2 py-0.5 text-xs'>
          {project.tag}
        </span>
      </div>
      <p className='text-foreground/70 mt-1 text-sm'>{project.description}</p>
      <div className='mt-3 flex flex-wrap gap-2'>
        {project.tech.map(t => (
          <span
            key={t}
            className='bg-foreground/5 text-foreground/70 rounded px-2 py-1 text-xs'
          >
            {t}
          </span>
        ))}
      </div>
      <div className='mt-4 flex items-center gap-4 text-sm'>
        {project.internalPath ? (
          <Link href={project.internalPath} className='hover:underline'>
            Fallstudie
          </Link>
        ) : null}
        {project.liveUrl ? (
          <Link
            href={project.liveUrl}
            target='_blank'
            className='hover:underline'
          >
            Live
          </Link>
        ) : null}
        {project.repoUrl ? (
          <Link
            href={project.repoUrl}
            target='_blank'
            className='hover:underline'
          >
            Code
          </Link>
        ) : null}
      </div>
    </div>
  );
}
