import ProjectTemplate from '@/components/ProjectTemplate';
import { getMinimalProjectBySlug } from '@/lib/projects';

export default function DesignTokens() {
  const project = getMinimalProjectBySlug('design-tokens');

  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectTemplate project={project} currentSlug='design-tokens' />;
}
