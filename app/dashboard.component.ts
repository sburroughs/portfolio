import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {Skill} from './skill';
import {SkillService} from './skill.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['styles/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

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