export type ProjectTag = 'web' | 'mobile' | 'backend' | 'opensource' | 'design';

export interface Project {
  /** Human-readable title */
  title: string;
  /** Short summary shown on cards */
  description: string;
  /** Internal case-study path like `/projects/foo` */
  internalPath?: string;
  /** Public URL for the project */
  liveUrl?: string;
  /** Repository link */
  repoUrl?: string;
  /** Optional image path under `public/` */
  image?: string;
  /** Tech badges */
  tech: string[];
  /** Tag used for filtering */
  tag: ProjectTag;
}
