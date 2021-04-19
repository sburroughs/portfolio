export interface Skill {
    type: SkillType;
    name: string;
    description: string;
    experience: number;
}

export enum SkillType {
  BACKEND,
  FRONTEND,
  DATA,
  INFRASTRUCTURE,
  TESTING,
  PM
}
