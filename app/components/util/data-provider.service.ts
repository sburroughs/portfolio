import {POSITIONS, EDUCATION, VOLUNTEER, PERSONAL} from './mock-data';
import {Position, Education, Volunteer} from '../experience/experience';
import {Personal} from '../personal/personal';
import {Injectable} from '@angular/core';

/**
 * Generic service to provide mock data in a async way.
 */
@Injectable()
export class DataProviderService {

    /**
     *
     * @returns {Promise<Position[]>}
     */
    getPositions(): Promise<Position[]> {
        return Promise.resolve(POSITIONS);
    }

    /**
     *
     * @returns {Promise<Education[]>}
     */
    getEducation(): Promise<Education[]> {
        return Promise.resolve(EDUCATION);
    }

    /**
     *
     * @returns {Promise<Volunteer[]>}
     */
    getVolunteers(): Promise<Volunteer[]> {
        return Promise.resolve(VOLUNTEER);
    }

    /**
     *
     * @returns {Promise<Personal>}
     */
    getPersonal(): Promise<Personal> {
        return Promise.resolve(PERSONAL);
    }

}
