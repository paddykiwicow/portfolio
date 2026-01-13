import ProjectTemplate from '@/components/ProjectTemplate';
import { getMinimalProjectBySlug } from '@/lib/projects';

export default function DirectApplication() {
  const project = getMinimalProjectBySlug('mobile-apply-redesign');

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <ProjectTemplate project={project} currentSlug='mobile-apply-redesign' />
  );
}
