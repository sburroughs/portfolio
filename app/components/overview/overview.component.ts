import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {Skill} from './../skills/skill';
import {SkillService} from './../skills/skill.service.ts';

import {ExperienceComponent} from '../experience/experience.component.ts';

@Component({
    selector: 'overview',
    templateUrl: 'app/components/overview/overview.component.html',
    styleUrls: ['assets/css/dashboard.component.css'],
    directives: [ExperienceComponent]
})
export class OverviewComponent implements OnInit {

    skills:Skill[] = [];

    constructor(private _router:Router,
                private _skillService:SkillService) {
    }

    ngOnInit() {
        this._skillService.getSkills()
            .then(skills => this.skills = skills.slice(0, 4));
    }

    gotoDetail(skill:Skill) {
        let link = ['SkillDetail', {name: skill.name}];
        this._router.navigate(link);
    }
}