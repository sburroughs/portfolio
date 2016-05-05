import {Component, OnInit} from 'angular2/core';
import {Personal} from '../personal/personal.ts';

import {DataProviderService} from '../util/data-provider.service.ts';

@Component({
    selector: 'personal',
    templateUrl: 'app/components/personal/personal.component.html',
    styleUrls: ['assets/css/skills.component.css']
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