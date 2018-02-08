import {Component, Input} from '@angular/core';
import {Experience} from './experience';

@Component({
  selector: 'position',
  templateUrl: 'position.component.html',
})
export class PositionComponent {
  @Input() title: String = '';
  @Input() positions: Experience[] = [];
}
