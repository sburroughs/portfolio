import {Component, Input} from 'angular2/core';
import {Skill} from './skill';

@Component({
    selector: 'skill-detail',
    templateUrl: 'app/components/skills/skill-detail.component.html',
    directives: []
})
export class SkillDetailComponent {
    @Input() skill:Skill;
}
