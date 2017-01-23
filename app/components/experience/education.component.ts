import {Component, Input} from '@angular/core';
import {Education} from './experience';

@Component({
    selector: 'education',
    templateUrl: 'app/components/experience/education.component.html',
})
export class EducationComponent {
    @Input() educations:Education[];
}
