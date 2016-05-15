import {Component, OnInit, Input} from 'angular2/core';

import {Experience} from './experience';
import {DataProviderService} from '../util/data-provider.service.ts';

@Component({
    selector: 'positions',
    templateUrl: 'app/components/experience/experience.component.html',
})
export class ExperienceComponent implements OnInit {

    experiences:Experience[];
    conferences:Experience[];
    educations:Experience[];
    
    constructor(private _experienceService:DataProviderService) {
        // NO-OP
    }

    get() {
        this._experienceService.getPositions().then(experiences => this.experiences = experiences);
        this._experienceService.getConferences().then(conferences => this.conferences = conferences);
        this._experienceService.getEducation().then(educations => this.educations = educations);
    }

    ngOnInit() {
        this.get();
    }

}