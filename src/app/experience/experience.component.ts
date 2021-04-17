import {Component, Input, OnInit} from '@angular/core';
import {Experience} from './experience';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ContentManagementService} from '../util/content-management.service';

@Component({
  selector: 'experience',
  templateUrl: 'experience.component.html',
})
export class ExperienceComponent implements OnInit {
  @Input() experience: Experience;

  constructor(private modalService: NgbModal) {
    // NO-OP
  }

  open(content): void {
    this.modalService.open(content);
  }

  ngOnInit(): void {
    // NO-OP
  }

}
