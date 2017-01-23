import {Component, Input} from '@angular/core';
import {Skill} from './skill';

@Component({
    selector: 'skill-detail',
    templateUrl: 'app/components/skills/skill-detail.component.html',
})
export class SkillDetailComponent {
    @Input() skill:Skill;
}
