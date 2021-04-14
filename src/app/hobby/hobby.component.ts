import {Component, OnInit} from '@angular/core';
import {Hobby} from './hobby';
import {ContentManagementService} from '../util/content-management.service';

@Component({
  selector: 'hobbies',
  templateUrl: 'hobby.component.html',
})
export class HobbyComponent implements OnInit {

  flipFlag = false;
  hobbies: Hobby[];

  constructor(private cms: ContentManagementService) {
    // NO-OP
  }

  get(): void {
    this.cms.getHobbies().then(hobbies => this.hobbies = hobbies);
  }

  ngOnInit(): void {
    this.get();
  }

  getHyperlink(h: Hobby): string {
    this.flipFlag = !this.flipFlag;
    return h.hyperlink;

  }


}
