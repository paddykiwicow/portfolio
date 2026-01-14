import { minimalProjects } from '@/data/minimalProjects';
import type { MinimalProjectTemplate, Project } from '@/types/project';

/**
 * Converts MinimalProjectTemplate to Project format for homepage display
 */
export function convertToProject(
  minimalProject: MinimalProjectTemplate
): Project {
  // Find the featured image from visuals, fallback to first image if none is featured
  const featuredVisual = minimalProject.visuals.find(visual => visual.featured);
  const firstImageVisual = minimalProject.visuals.find(
    visual => visual.type === 'image'
  );
  const featuredImage = featuredVisual?.data.src || firstImageVisual?.data.src;

  return {
    title: minimalProject.title,
    description: minimalProject.shortDescription,
    internalPath: `/projects/${minimalProject.slug}`,
    image: featuredImage,
    tech: [], // We'll add tech tags later if needed
    tag: 'design', // Default tag, can be customized per project
  };
}

/**
 * Get featured projects for homepage (first 3 projects)
 */
export function getFeaturedProjects(): Project[] {
  return minimalProjects.slice(0, 3).map(convertToProject);
}

/**
 * Get all projects converted to Project format
 */
export function getAllProjects(): Project[] {
  return minimalProjects.map(convertToProject);
}

/**
 * Get project by slug
 */
export function getProjectBySlug(
  slug: string
): MinimalProjectTemplate | undefined {
  return minimalProjects.find(project => project.slug === slug);
}

/**
 * Alias for getProjectBySlug for backward compatibility
 */
export function getMinimalProjectBySlug(
  slug: string
): MinimalProjectTemplate | undefined {
  return getProjectBySlug(slug);
}

/**
 * Get the next project slug in sequence
 */
export function getNextProjectSlug(currentSlug: string): string | undefined {
  const currentIndex = minimalProjects.findIndex(
    project => project.slug === currentSlug
  );
  if (currentIndex === -1 || currentIndex === minimalProjects.length - 1) {
    return undefined;
  }
  return minimalProjects[currentIndex + 1].slug;
}

/**
 * Get the previous project slug in sequence
 */
export function getPreviousProjectSlug(
  currentSlug: string
): string | undefined {
  const currentIndex = minimalProjects.findIndex(
    project => project.slug === currentSlug
  );
  if (currentIndex === -1 || currentIndex === 0) {
    return undefined;
  }
  return minimalProjects[currentIndex - 1].slug;
}
