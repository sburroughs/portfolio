import {Component, Input, OnInit} from '@angular/core';
import {Experience} from './experience';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ContentManagementService} from '../util/content-management.service';
import {WorkExperience} from './work-experience';

@Component({
  selector: 'work-experience-overview',
  templateUrl: 'work-experience-overview.component.html',
})
export class WorkExperienceOverviewComponent implements OnInit {
  experiences: WorkExperience[] = [];

  constructor(private cms: ContentManagementService) {
    // NO-OP
  }

  ngOnInit(): void {
    this.cms.getWorkExperiences().then(experiences => this.experiences = experiences);
  }
}
