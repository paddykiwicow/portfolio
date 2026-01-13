import ProjectTemplate from '@/components/ProjectTemplate';
import { getMinimalProjectBySlug } from '@/lib/projects';

export default function Abby() {
  const project = getMinimalProjectBySlug('abby');

  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectTemplate project={project} currentSlug='abby' />;
}
