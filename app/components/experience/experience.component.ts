import {Component, OnInit} from 'angular2/core';

import {Position, Conference, Education} from './experience';
import {DataProviderService} from '../util/data-provider.service.ts';
import {PositionComponent} from "./position.component";
import {EducationComponent} from "./education.component";
import {ConferenceComponent} from "./conference.component";

@Component({
    selector: 'experience',
    templateUrl: 'app/components/experience/experience.component.html',
    directives: [PositionComponent, EducationComponent, ConferenceComponent]
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