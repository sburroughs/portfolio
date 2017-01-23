import {POSITIONS, EDUCATION, CONFERENCES, PERSONAL} from './mock-data';
import {Position, Education, Conference} from '../experience/experience';
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
     * @returns {Promise<Conference[]>}
     */
    getConferences(): Promise<Conference[]> {
        return Promise.resolve(CONFERENCES);
    }

    /**
     *
     * @returns {Promise<Personal>}
     */
    getPersonal(): Promise<Personal> {
        return Promise.resolve(PERSONAL);
    }

}
