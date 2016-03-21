import { SKILLS } from './mock-data';
import { Injectable } from 'angular2/core';

@Injectable()
export class SkillService {
  getSkills() {
    return Promise.resolve(SKILLS);
  }

  getSkill(name: string) {
    return Promise.resolve(SKILLS).then(
      skills => skills.filter(skill => skill.name === name)[0]
    );
  }
}
