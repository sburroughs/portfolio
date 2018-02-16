import {Component, Input} from '@angular/core';
import {Experience} from './experience';

@Component({
  selector: 'experience',
  templateUrl: 'experience.component.html',
})
export class ExperienceComponent {
  @Input() experiences: Experience[] = [];
}
