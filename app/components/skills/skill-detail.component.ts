import {Component, Input} from 'angular2/core';
import {Skill} from './skill';
import {SkillChartComponent} from "./skill-chart.component";

@Component({
    selector: 'skill-detail',
    templateUrl: 'app/components/skills/skill-detail.component.html',
    directives: [SkillChartComponent]
})
export class SkillDetailComponent {
    @Input() skill:Skill;
}
