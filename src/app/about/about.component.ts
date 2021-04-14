import {Component, OnInit} from '@angular/core';

import {About} from './about';
import {ContentManagementService} from '../util/content-management.service';

@Component({
  selector: 'about',
  templateUrl: 'about.component.html',
})
export class AboutComponent implements OnInit {

  about: About;

  constructor(private cms: ContentManagementService) {
    // NO-OP
  }

  get(): void {
    this.cms.getAbout().then(about => this.about = about);
  }

  ngOnInit(): void {
    this.get();
  }


}
