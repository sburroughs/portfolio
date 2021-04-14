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

    skillSummary: Skill[] = [];
    currentPosition: Experience[] = [];
    about: About;

    constructor(private cms: ContentManagementService) {
    }

    ngOnInit(): void {
        this.cms.getSkills()
            .then(skills => {
                this.skillSummary = skills.filter(skill => {
                    return skill.experience >= 6;
                }).splice(0, 12);
            });

        this.cms.getExperiences()
            .then(positions => this.currentPosition = positions.slice(0, 1));

        this.cms.getAbout()
            .then(personal => this.about = personal);
    }



}
