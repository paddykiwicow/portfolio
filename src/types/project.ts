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
  /** Project completion date */
  date?: string;
}

export interface MinimalProject {
  /** Human-readable title */
  title: string;
  /** Short intro text */
  intro: string;
  /** Array of visual assets (images/videos) */
  visuals: VisualAsset[];
  /** Tech badges */
  tech: string[];
  /** Tag used for filtering */
  tag: ProjectTag;
  /** Project completion date */
  date?: string;
}

export interface VisualAsset {
  /** Path to the visual asset */
  src: string;
  /** Alt text for accessibility */
  alt: string;
  /** Type of asset */
  type: 'image' | 'video';
  /** Optional poster for videos */
  poster?: string;
}

// Extended types for template system
export type VisualType = 'image' | 'video' | 'before-after';

export interface TemplateVisual {
  type: VisualType;
  data: {
    src: string;
    alt: string;
    poster?: string; // Only for videos
    beforeSrc?: string; // Only for before-after
    afterSrc?: string; // Only for before-after
    beforeAlt?: string; // Only for before-after
    afterAlt?: string; // Only for before-after
  };
  subtitle?: string; // Optional subtitle for the visual
  featured?: boolean; // Flag to mark this visual as the featured image for homepage
  wide?: boolean; // Flag to make this visual span full width in masonry grid
}

export interface MinimalProjectTemplate {
  /** Human-readable title */
  title: string;
  /** Short description for homepage cards */
  shortDescription: string;
  /** Array of template visuals */
  visuals: TemplateVisual[];
  /** Project completion date */
  date?: string;
  /** Company name */
  company?: string;
  /** URL slug for routing */
  slug: string;
  /** Custom badges/tags to display on the project page */
  badges?: string[];
  /** Context text to display under the first image */
  context?: string;
  /** Goal text to display in the context section */
  goal?: string;
  /** Role items to display under the context section as bullet points (can be string or array) */
  role?: string | string[];
  /** Outcome items to display under the role section as bullet points (can be string or array) */
  outcome?: string | string[];
}
