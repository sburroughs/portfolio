import {POSITIONS, EDUCATION,  CONFERENCES, PERSONAL} from './mock-data';
import {Injectable} from 'angular2/core';

@Injectable()
export class DataProviderService {

    getPositions() {
        return Promise.resolve(POSITIONS);
    }

    getEducation() {
        return Promise.resolve(EDUCATION);
    }

    getConferences() {
        return Promise.resolve(CONFERENCES);
    }

    getPersonal() {
        return Promise.resolve(PERSONAL);
    }
    
}
