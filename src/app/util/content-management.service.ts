import {ABOUT, CONTACT, EXPERIENCES, HOBBIES, SKILLS} from './content';
import {Experience} from '../experience/experience';
import {Injectable} from '@angular/core';
import {About} from '../about/about';
import {Skill} from '../skills/skill';
import {Hobby} from '../hobby/hobby';
import {ContactInformation} from '../contact/contact';

/**
 * Generic service to provide mock data in a async way.
 */
@Injectable()
export class ContentManagementService {

    getExperiences(): Promise<Experience[]> {
        return Promise.resolve(EXPERIENCES);
    }

    getContact(): Promise<ContactInformation> {
        return Promise.resolve(CONTACT);
    }

    getAbout(): Promise<About> {
        return Promise.resolve(ABOUT);
    }

    getHobbies(): Promise<Hobby[]> {
        return Promise.resolve(HOBBIES);
    }

    getSkills(): Promise<Skill[]> {
        return Promise.resolve(SKILLS);
    }

}
