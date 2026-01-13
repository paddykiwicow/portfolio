import ProjectTemplate from '@/components/ProjectTemplate';
import { getMinimalProjectBySlug } from '@/lib/projects';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getMinimalProjectBySlug(slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectTemplate project={project} currentSlug={slug} />;
}
