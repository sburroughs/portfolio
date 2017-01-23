import {SKILLS} from '../util/mock-data';
import {Injectable} from '@angular/core';
import {Skill} from "./skill";

@Injectable()
export class SkillService {
    /**
     *
     * @returns {Promise<Skill[]>}
     */
    getSkills(): Promise<Skill[]> {
        return Promise.resolve(SKILLS);
    }

    /**
     *
     * @param name
     * @returns {Promise<TResult>}
     */
    getSkill(name: string): Promise<Skill> {
        return Promise.resolve(SKILLS).then(
            skills => skills.filter(skill => skill.name === name)[0]
        );
    }
}
