import {Component, Input, OnInit} from '@angular/core';
import {Experience} from './experience';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ContentManagementService} from '../util/content-management.service';

@Component({
  selector: 'experience-overview',
  templateUrl: 'experience-overview.component.html',
})
export class ExperienceOverviewComponent implements OnInit {
  experiences: Experience[] = [];

  constructor(private cms: ContentManagementService) {
    // NO-OP
  }

  ngOnInit(): void {
    this.cms.getExperiences().then(experiences => this.experiences = experiences);
  }
}
