import {Component, OnInit} from 'angular2/core';

import {Experience} from './experience';
import {ExperienceService} from './experience.service.ts';

@Component({
    selector: 'my-positions',
    templateUrl: 'app/components/experience/experience.component.html',
    styleUrls: ['assets/css/skills.component.css']
})
export class ExperienceComponent implements OnInit {
    experiences:Experience[];

    constructor(private _experienceService:ExperienceService) {
    }

    get() {
        this._experienceService.getPositions().then(experiences => this.experiences = experiences);
    }

    ngOnInit() {
        this.get();
    }

}