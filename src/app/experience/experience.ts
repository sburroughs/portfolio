import {Skill} from '../skills/skill';

export interface Experience {
  type: ExperienceType;
  organization: string;
  location: string;
  title: string;
  description: string;
  skills: Skill[];
  highlights: string[];
  startDate: string;
  endDate: string;
}

export enum ExperienceType {
    WORK,
    EDUCATION,
    VOLUNTEER,
}
