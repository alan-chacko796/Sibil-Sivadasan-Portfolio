export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'automation' | 'manual' | 'portfolio';
  categoryLabel: string;
  description: string;
  bullets: string[];
  technologies: string[];
  keyHighlights: string[];
  testCoverageCount?: string;
  githubUrl?: string;
  repoName?: string;
  isFeatured?: boolean;
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    tag?: string;
  }[];
}

export interface TimelineItem {
  period: string;
  title: string;
  institution: string;
  location: string;
  scoreOrType?: string;
  description: string;
  highlights: string[];
  iconType: 'education' | 'training';
}
