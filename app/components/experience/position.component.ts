import {Component, Input} from 'angular2/core';
import {Position} from './experience';

@Component({
    selector: 'position',
    templateUrl: 'app/components/experience/position.component.html',
})
export class PositionComponent {
    @Input() positions:Position[] = [];
}
