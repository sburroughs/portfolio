import {POSITIONS, EDUCATION,  CONFERENCES} from './mock-data';
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
    
}
