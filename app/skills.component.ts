import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Skill } from './skill';
import { SkillDetailComponent } from './skill-detail.component';
import { SkillService } from './skill.service';

@Component({
    selector: 'my-skills',
    templateUrl: 'app/skills.component.html',
    styleUrls: ['styles/skills.component.css'],
    directives: [SkillDetailComponent]
})
export class SkillsComponent implements OnInit {
    skills:Skill[];
    selectedSkill:Skill;

    constructor(private _router:Router,
                private _skillService:SkillService) {
    }

    getSkills() {
        this._skillService.getSkills().then(skills => this.skills = skills);
    }

    ngOnInit() {
        this.getSkills();
    }

    onSelect(skill:Skill) {
        this.selectedSkill = skill;
    }

    gotoDetail() {
        this._router.navigate(['SkillDetail', {name: this.selectedSkill.name}]);
    }
}