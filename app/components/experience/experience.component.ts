import {Component, OnInit, Input} from 'angular2/core';

import {Experience} from './experience';
import {DataProviderService} from '../util/data-provider.service.ts';

@Component({
    selector: 'positions',
    templateUrl: 'app/components/experience/experience.component.html',
    styleUrls: ['assets/css/skills.component.css']
})
export class ExperienceComponent implements OnInit {
    @Input()
    experiences:Experience[];

    constructor(private _experienceService:DataProviderService) {
    }

    get() {
        this._experienceService.getPositions().then(experiences => this.experiences = experiences);
    }

    ngOnInit() {
        this.get();
    }

}