import {Component, Input} from '@angular/core';
import {Position} from './experience';

@Component({
    selector: 'position',
    templateUrl: 'app/components/experience/position.component.html',
})
export class PositionComponent {
    @Input() title:string = '';
    @Input() positions:Position[] = [];
}
