import type { ReactNode } from 'react';

export const metadata = {
  title: 'Projekte — Fallstudien',
};

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return (
    <div className='py-10'>
      <div className='max-w-3xl'>{children}</div>
    </div>
  );
}
