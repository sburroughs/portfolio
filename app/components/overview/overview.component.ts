import {Component, OnInit} from 'angular2/core';

import {Skill} from './../skills/skill';
import {SkillService} from './../skills/skill.service.ts';

import {ContactComponent} from "../personal/contact.component";
import {DataProviderService} from "../util/data-provider.service";

import {Position} from '../experience/experience'

@Component({
    selector: 'overview',
    templateUrl: 'app/components/overview/overview.component.html',
    directives: [ContactComponent]
})
export class OverviewComponent implements OnInit {

    tagline:string;
    summary:string;
    skillSummary:Skill[] = [];
    latestPosition:Position;

    constructor(private _skillService:SkillService,
                private _dataProviderService:DataProviderService) {
    }

    ngOnInit() {
        this._skillService.getSkills()
            .then(skills => this.skillSummary = skills.slice(0, 4));

        this._dataProviderService.getPositions()
            .then(experiences => this.latestPosition = experiences[0]);

        this._dataProviderService.getPersonal()
            .then(personal => {
                this.tagline = personal.tagline;
                this.summary = personal.summary;
            });
    }

}