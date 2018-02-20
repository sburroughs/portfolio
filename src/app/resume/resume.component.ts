import {Component, OnInit} from '@angular/core';
import {Skill} from '../skills/skill';
import {DataProviderService} from '../util/data-provider.service';
import {Experience} from '../experience/experience';
import {ContactInformation} from "../contact/contact";
import {About} from "../about/about";


@Component({
    selector: 'resume',
    templateUrl: 'resume.component.html',
})
export class ResumeComponent implements OnInit {

    about: About;
    contact: ContactInformation;
    experiences: Experience[] = [];
    skillSummary: Skill[] = [];

    constructor(private _dataProviderService: DataProviderService) {
    }

    ngOnInit() {
        this._dataProviderService.getSkills()
            .then(skills => this.skillSummary = skills.slice(0, 4));

        this._dataProviderService.getExperiences()
            .then(experiences => this.experiences = experiences);

        this._dataProviderService.getAbout()
            .then(about => this.about = about);
    }

}
