import {Component, Input} from 'angular2/core';
import {Conference} from './experience';

@Component({
    selector: 'conference',
    templateUrl: 'app/components/experience/conference.component.html',
})
export class ConferenceComponent {
    @Input() conferences:Conference[];
}