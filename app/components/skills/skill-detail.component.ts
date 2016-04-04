import { Component, OnInit , Input} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import { Skill } from './skill';
import { SkillService } from './skill.service.ts';

@Component({
    selector: 'my-skill-detail',
    templateUrl: 'app/components/skills/skill-detail.component.html',
    styleUrls: ['assets/css/skill-detail.component.css'],
})
export class SkillDetailComponent implements OnInit {
    @Input() skill:Skill;

    constructor(private _skillService:SkillService,
                private _routeParams:RouteParams) {
    }

    ngOnInit() {
        let name = this._routeParams.get('name');
        this._skillService.getSkill(name)
            .then(skill => this.skill = skill);
    }

    goBack() {
        window.history.back();
    }
}
