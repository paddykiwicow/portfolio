import ProjectTemplate from '@/components/ProjectTemplate';
import { getMinimalProjectBySlug } from '@/lib/projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Berufsorientierungs-KI „Abby" — Patrick Marx',
};

export default function Abby() {
  const project = getMinimalProjectBySlug('abby');

  if (!project) {
    return <div>Projekt nicht gefunden</div>;
  }

  return <ProjectTemplate project={project} currentSlug='abby' />;
}
