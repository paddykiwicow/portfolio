'use client';

import { useMemo, useState } from 'react';
import { projects } from '@/data/projects';
import type { ProjectTag } from '@/types/project';
import { ProjectCard } from '@/components/ProjectCard';

const filters: { label: string; value: ProjectTag | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Web', value: 'web' },
  { label: 'Mobile', value: 'mobile' },
  { label: 'Backend', value: 'backend' },
  { label: 'Open Source', value: 'opensource' },
  { label: 'Design', value: 'design' },
];

export default function PortfolioPage() {
  const [active, setActive] = useState<ProjectTag | 'all'>('all');
  const visible = useMemo(
    () =>
      active === 'all' ? projects : projects.filter(p => p.tag === active),
    [active]
  );

  return (
    <div className='py-10'>
      <div className='flex flex-wrap items-center justify-between gap-4'>
        <h1 className='text-2xl font-medium tracking-tight sm:text-3xl'>
          Portfolio
        </h1>
        <div className='flex items-center gap-2 text-sm'>
          {filters.map(f => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={
                'rounded-md border px-3 py-1.5 transition ' +
                (active === f.value
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-foreground/20 hover:bg-foreground/5')
              }
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className='mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {visible.map(p => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </div>
  );
}
