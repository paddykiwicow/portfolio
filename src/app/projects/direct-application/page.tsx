import ProjectTemplate from '@/components/ProjectTemplate';
import { getMinimalProjectBySlug } from '@/lib/projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Direktbewerbung — Patrick Marx',
};

export default function DirectApplication() {
  const project = getMinimalProjectBySlug('mobile-apply-redesign');

  if (!project) {
    return <div>Projekt nicht gefunden</div>;
  }

  return (
    <ProjectTemplate project={project} currentSlug='mobile-apply-redesign' />
  );
}
