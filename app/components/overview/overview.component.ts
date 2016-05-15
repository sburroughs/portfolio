import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {Skill} from './../skills/skill';
import {SkillService} from './../skills/skill.service.ts';

import {Experience} from './../experience/experience.ts';
import {ExperienceComponent} from '../experience/experience.component.ts';
import {PersonalComponent} from "../personal/personal.component";
import {DataProviderService} from "../util/data-provider.service";

@Component({
    selector: 'overview',
    templateUrl: 'app/components/overview/overview.component.html',
    directives: [ExperienceComponent, PersonalComponent]
})
export class OverviewComponent implements OnInit {

    skillSummary:Skill[] = [];
    latestPosition:Experience;

    constructor(private _router:Router,
                private _skillService:SkillService,
                private _dataProviderService:DataProviderService) {
    }

    ngOnInit() {
        this._skillService.getSkills()
            .then(skills => this.skillSummary = skills.slice(0, 4));

        this._dataProviderService.getPositions()
            .then(experiences => this.latestPosition = experiences[0]);
    }

    gotoDetail(skill:Skill) {
        let link = ['SkillDetail', {name: skill.name}];
        this._router.navigate(link);
    }
}