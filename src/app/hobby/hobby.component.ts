import {Component, OnInit} from '@angular/core';

import {DataProviderService} from '../util/data-provider.service';
import {Hobby} from "./hobby";

@Component({
  selector: 'hobbies',
  templateUrl: 'hobby.component.html',
})
export class HobbyComponent implements OnInit {

  flipFlag = false;
  hobbies: Hobby[];

  constructor(private _dataProvider: DataProviderService) {
    // NO-OP
  }

  get() {
    this._dataProvider.getHobbies().then(hobbies => this.hobbies = hobbies);
  }

  ngOnInit() {
    this.get();
  }

  getHyperlink(h: Hobby): string {
    this.flipFlag = !this.flipFlag;
    return h.hyperlink;

  }


}
