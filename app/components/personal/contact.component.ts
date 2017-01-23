import {Component, OnInit} from '@angular/core';
import {Personal} from '../personal/personal';

import {DataProviderService} from '../util/data-provider.service';
import {ContactInformation} from "./contact";

@Component({
    selector: 'contact',
    templateUrl: 'app/components/personal/contact.component.html',
})
export class ContactComponent implements OnInit {

    contact:ContactInformation;

    constructor(private _dataProvider:DataProviderService) {
        // NO-OP
    }

    get() {
        this._dataProvider.getPersonal().then(personal => this.contact = personal.contact);
    }

    ngOnInit() {
        this.get();
    }


}