export interface Skill {
    type: string;
    name: string;
    description: string;
    experience: number;
}

export enum ExperienceType {
  BACKEND,
  FRONTEND,
  DATA,
  INFRASTRUCTURE,
  TESTING,
  PM
}
