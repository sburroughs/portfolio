import {Component, Input, OnInit} from '@angular/core';
import {Skill} from './skill';

@Component({
    selector: 'skill-detail',
    templateUrl: 'skill-detail.component.html',
})
export class SkillDetailComponent implements OnInit {

    @Input() skill: Skill;
    starRating: number;

    ngOnInit(): void {
        this.starRating = this.skill.experience / 2;
    }
}
