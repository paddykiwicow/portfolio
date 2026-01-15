import type { MinimalProjectTemplate } from '@/types/project';
import type { Language } from './i18n';

/**
 * Get translated project data based on language
 */
export function getTranslatedProject(
  project: MinimalProjectTemplate,
  language: Language
): MinimalProjectTemplate {
  if (language === 'de' || !project.translations?.en) {
    return project;
  }

  const en = project.translations.en;
  const translatedVisuals = project.visuals.map((visual, index) => {
    const enVisual = en.visuals?.[index];
    return {
      ...visual,
      subtitle: enVisual?.subtitle || visual.subtitle,
      data: {
        ...visual.data,
        alt: enVisual?.data?.alt || visual.data.alt,
      },
    };
  });

  return {
    ...project,
    title: en.title || project.title,
    shortDescription: en.shortDescription || project.shortDescription,
    context: en.context || project.context,
    goal: en.goal || project.goal,
    role: en.role || project.role,
    outcome: en.outcome || project.outcome,
    visuals: translatedVisuals,
  };
}
