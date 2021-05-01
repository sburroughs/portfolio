import {Component, OnInit} from '@angular/core';

import {Skill} from './../skills/skill';
import {ContentManagementService} from '../util/content-management.service';

import {Experience} from '../experience/experience';
import {About} from '../about/about';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'overview',
  templateUrl: 'overview.component.html',
})
export class OverviewComponent implements OnInit {

  skillHighlights: Skill[] = [];
  experienceHighlight: Experience;
  about: About;

  constructor(private cms: ContentManagementService) {
  }

  ngOnInit(): void {
    this.cms.getSkills()
      .then(skills => {
        this.skillHighlights = skills
          .sort((a, b) => b.experience - a.experience)
          .filter(skill => {
            return skill.experience >= 6;
          })
          .splice(0, 6);
      });

    this.cms.getExperiences()
      .then(experiences => this.experienceHighlight = experiences[0]);

    this.cms.getAbout()
      .then(personal => this.about = personal);
  }


}
