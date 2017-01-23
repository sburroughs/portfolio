import {Component, OnInit} from '@angular/core';
import {Personal} from '../personal/personal';

import {DataProviderService} from '../util/data-provider.service';

@Component({
    selector: 'personal',
    templateUrl: 'app/components/personal/personal.component.html',
})
export class PersonalComponent implements OnInit {

    about:Personal;

    constructor(private _dataProvider:DataProviderService) {
        // NO-OP
    }

    get() {
        this._dataProvider.getPersonal().then(about => this.about = about);
    }

    ngOnInit() {
        this.get();
    }


}