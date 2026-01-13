import ProjectTemplate from '@/components/ProjectTemplate';
import { getMinimalProjectBySlug } from '@/lib/projects';
import type { Metadata } from 'next';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getMinimalProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Projekt nicht gefunden — Patrick Marx',
    };
  }

  return {
    title: `${project.title} — Patrick Marx`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getMinimalProjectBySlug(slug);

  if (!project) {
    return <div>Projekt nicht gefunden</div>;
  }

  return <ProjectTemplate project={project} currentSlug={slug} />;
}
