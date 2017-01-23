import {Component, OnInit} from '@angular/core';

import {Position, Conference, Education} from './experience';
import {DataProviderService} from '../util/data-provider.service';

@Component({
    selector: 'experience',
    templateUrl: 'app/components/experience/experience.component.html',
})
export class ExperienceComponent implements OnInit {

    positions:Position[] = [];
    conferences:Conference[] = [];
    educations:Education[] = [];

    constructor(private _experienceService:DataProviderService) {
        // NO-OP
    }

    get() {
        this._experienceService.getPositions().then(positions => this.positions = positions);
        this._experienceService.getConferences().then(conferences => this.conferences = conferences);
        this._experienceService.getEducation().then(educations => this.educations = educations);
    }

    ngOnInit() {
        this.get();
    }

}