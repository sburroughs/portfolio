import {POSITIONS, EDUCATION, TRAINING} from './../../mock-data';
import {Injectable} from 'angular2/core';

@Injectable()
export class ExperienceService {

    getPositions() {
        return Promise.resolve(POSITIONS);
    }

    getEducation() {
        return Promise.resolve(EDUCATION);
    }

    getTraining() {
        return Promise.resolve(TRAINING);
    }

}
