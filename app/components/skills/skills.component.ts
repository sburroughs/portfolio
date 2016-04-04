import {Component, OnInit} from 'angular2/core';

import {Skill} from './skill';
import {SkillDetailComponent} from './skill-detail.component.ts';
import {SkillService} from './skill.service.ts';

@Component({
    selector: 'my-skills',
    templateUrl: 'app/components/skills/skills.component.html',
    styleUrls: ['assets/css/skills.component.css'],
    directives: [SkillDetailComponent]
})
export class SkillsComponent implements OnInit {
    skills:Skill[];
    selectedSkill:Skill;

    constructor(private _skillService:SkillService) {
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
    
}