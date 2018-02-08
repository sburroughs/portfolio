import {POSITIONS, EDUCATION, PERSONAL} from './mock-data';
import {Experience} from '../experience/experience';
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
  getPositions(): Promise<Experience[]> {
    return Promise.resolve(POSITIONS);
  }

  /**
   *
   * @returns {Promise<Education[]>}
   */
  getEducation(): Promise<Experience[]> {
    return Promise.resolve(EDUCATION);
  }

  /**
   *
   * @returns {Promise<Personal>}
   */
  getPersonal(): Promise<Personal> {
    return Promise.resolve(PERSONAL);
  }

}
