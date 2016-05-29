import {POSITIONS, EDUCATION, CONFERENCES, PERSONAL} from './mock-data';
import {Injectable} from 'angular2/core';

@Injectable()
export class DataProviderService {

    /**
     *
     * @returns {Promise<Position[]>}
     */
    getPositions() {
        return Promise.resolve(POSITIONS);
    }

    /**
     *
     * @returns {Promise<Education[]>}
     */
    getEducation() {
        return Promise.resolve(EDUCATION);
    }

    /**
     *
     * @returns {Promise<Conference[]>}
     */
    getConferences() {
        return Promise.resolve(CONFERENCES);
    }

    /**
     *
     * @returns {Promise<Personal>}
     */
    getPersonal() {
        return Promise.resolve(PERSONAL);
    }

}
