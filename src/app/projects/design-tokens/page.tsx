import ProjectTemplate from '@/components/ProjectTemplate';
import { getMinimalProjectBySlug } from '@/lib/projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Design Token Infrastructure — Patrick Marx',
};

export default function DesignTokens() {
  const project = getMinimalProjectBySlug('design-tokens');

  if (!project) {
    return <div>Projekt nicht gefunden</div>;
  }

  return <ProjectTemplate project={project} currentSlug='design-tokens' />;
}
