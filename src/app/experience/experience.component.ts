import {Component, OnInit} from '@angular/core';

import {Position, Volunteer, Education} from './experience';
import {DataProviderService} from '../util/data-provider.service';

@Component({
  selector: 'experience',
  templateUrl: 'experience.component.html',
})
export class ExperienceComponent implements OnInit {

  positions: Position[] = [];
  volunteers: Volunteer[] = [];
  educations: Education[] = [];

  constructor(private _experienceService: DataProviderService) {
    // NO-OP
  }

  get() {
    this._experienceService.getPositions().then(positions => this.positions = positions);
    this._experienceService.getVolunteers().then(volunteers => this.volunteers = volunteers);
    this._experienceService.getEducation().then(educations => this.educations = educations);
  }

  ngOnInit() {
    this.get();
  }

}
