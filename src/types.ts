export type FocusMode = 'developer' | 'pm' | 'hybrid';

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  focus: FocusMode | 'both';
  bullets: {
    text: string;
    focus: FocusMode | 'both';
  }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  gpa: string;
  period: string;
  location: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: {
    name: string;
    highlighted: boolean;
  }[];
}

export interface ProjectItem {
  name: string;
  technologies: string[];
  description: string;
  impact: string;
  focus: FocusMode | 'both';
}

export interface ResearchItem {
  title: string;
}
