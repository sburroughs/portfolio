import {Component, OnInit} from '@angular/core';

import {Experience} from './experience';
import {DataProviderService} from '../util/data-provider.service';

@Component({
  selector: 'resume',
  templateUrl: 'resume.component.html',
})
export class ResumeComponent implements OnInit {

  positions: Experience[] = [];
  educations: Experience[] = [];

  constructor(private _experienceService: DataProviderService) {
    // NO-OP
  }

  get() {
    this._experienceService.getPositions().then(positions => this.positions = positions);
    this._experienceService.getEducation().then(educations => this.educations = educations);
  }

  ngOnInit() {
    this.get();
  }

}
