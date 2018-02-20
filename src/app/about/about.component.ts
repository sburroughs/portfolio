import {Component, OnInit} from '@angular/core';

import {DataProviderService} from '../util/data-provider.service';
import {About} from "./about";

@Component({
  selector: 'about',
  templateUrl: 'about.component.html',
})
export class AboutComponent implements OnInit {

  about: About;

  constructor(private _dataProvider: DataProviderService) {
    // NO-OP
  }

  get() {
    this._dataProvider.getAbout().then(about => this.about = about);
  }

  ngOnInit() {
    this.get();
  }


}
