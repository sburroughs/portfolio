import {Component, Input} from '@angular/core';
import {Education} from './experience';

@Component({
  selector: 'education',
  templateUrl: 'education.component.html',
})
export class EducationComponent {
  @Input() educations: Education[];
}
