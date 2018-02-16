import { Component, OnInit } from '@angular/core';
import {ContactInformation} from "../personal/contact";
import {DataProviderService} from "../util/data-provider.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    contact: ContactInformation;

    constructor(private _dataProvider: DataProviderService) {
        // NO-OP
    }

    get() {
        this._dataProvider.getPersonal().then(personal => this.contact = personal.contact);
    }

    ngOnInit() {
        this.get();
    }

}
