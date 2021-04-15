export interface Experience {
  type: ExperienceType;
  organization: string;
  location: string;
  title: string;
  description: string;
  highlights: string[];
  startDate: string;
  endDate: string;
  // media: string;
}

export enum ExperienceType {
    WORK,
    EDUCATION,
    VOLUNTEER,
}
