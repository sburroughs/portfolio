import {Component, OnInit} from '@angular/core';

import {Skill} from './../skills/skill';
import {DataProviderService} from '../util/data-provider.service';

import {Experience} from '../experience/experience';
import {About} from "../about/about";

@Component({
    selector: 'overview',
    templateUrl: 'overview.component.html',
})
export class OverviewComponent implements OnInit {

    skillSummary: Skill[] = [];
    currentPosition: Experience[] = [];
    about: About;

    constructor(private _dataProviderService: DataProviderService) {
    }

    ngOnInit() {
        this._dataProviderService.getSkills()
            .then(skills => {
                this.skillSummary = skills.filter(skill => {
                    return skill.experience >= 6;
                }).splice(0, 12);
            });

        this._dataProviderService.getExperiences()
            .then(positions => this.currentPosition = positions.slice(0, 1));

        this._dataProviderService.getAbout()
            .then(personal => this.about = personal);
    }



}
