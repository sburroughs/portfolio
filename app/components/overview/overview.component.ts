import {Component, OnInit} from 'angular2/core';

import {Skill} from './../skills/skill';
import {SkillService} from './../skills/skill.service.ts';

import {ContactComponent} from "../personal/contact.component";
import {DataProviderService} from "../util/data-provider.service";

import {Position} from '../experience/experience'
import {Personal} from "../personal/personal";
import {SkillDetailComponent} from "../skills/skill-detail.component";
import {PositionComponent} from "../experience/position.component";


@Component({
    selector: 'overview',
    templateUrl: 'app/components/overview/overview.component.html',
    directives: [ContactComponent, SkillDetailComponent, PositionComponent]
})
export class OverviewComponent implements OnInit {

    skillSummary:Skill[] = [];
    selectedSkill:Skill;

    highlightPosition:Position[] = [];

    personal:Personal;

    constructor(private _skillService:SkillService,
                private _dataProviderService:DataProviderService) {
    }

    ngOnInit() {
        this._skillService.getSkills()
            .then(skills => {
                this.skillSummary = skills.slice(0, 4);
                this.selectedSkill = this.skillSummary[0];
            });

        this._dataProviderService.getPositions()
            .then(positions => this.highlightPosition = positions.slice(0, 1));

        this._dataProviderService.getPersonal()
            .then(personal => this.personal = personal);
    }

    setSelectedSkill(skill:Skill) {
        this.selectedSkill = skill;
    }

}