import {Component, OnInit} from 'angular2/core';

import {Experience} from './experience';
import {ExperienceService} from './experience.service';

@Component({
    selector: 'my-positions',
    templateUrl: 'app/experience.component.html',
    styleUrls: ['styles/skills.component.css'],
})
export class PositionsComponent implements OnInit {
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