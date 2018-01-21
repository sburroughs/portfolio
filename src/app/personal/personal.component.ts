import {Component, OnInit} from '@angular/core';
import {Personal, Hobby} from '../personal/personal';

import {DataProviderService} from '../util/data-provider.service';

@Component({
  selector: 'personal',
  templateUrl: 'personal.component.html',
})
export class PersonalComponent implements OnInit {

  flipFlag = false;
  about: Personal;

  constructor(private _dataProvider: DataProviderService) {
    // NO-OP
  }

  get() {
    this._dataProvider.getPersonal().then(about => this.about = about);
  }

  ngOnInit() {
    this.get();
  }

  getHyperlink(h: Hobby): string {
    this.flipFlag = !this.flipFlag;
    return h.hyperlink;

  }


}
