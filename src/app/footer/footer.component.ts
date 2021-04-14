import { Component, OnInit } from '@angular/core';
import {ContactInformation} from '../contact/contact';
import {ContentManagementService} from '../util/content-management.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    contact: ContactInformation;

    constructor(private cms: ContentManagementService) {
        // NO-OP
    }

    get(): void {
        this.cms.getContact().then(contact => this.contact = contact);
    }

    ngOnInit(): void {
        this.get();
    }

}
