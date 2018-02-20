import {Component, OnInit} from '@angular/core';
import {Experience} from './experience';
import {DataProviderService} from "../util/data-provider.service";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'experience',
    templateUrl: 'experience.component.html',
})
export class ExperienceComponent implements OnInit {
    public experiences: Experience[] = [];


    constructor(private _experienceService: DataProviderService,
                private modalService: NgbModal) {
        // NO-OP
    }

    open(content) {
        this.modalService.open(content).result.then((result) => {

        }, (reason) => {

        });
    }


    load() {
        this._experienceService.getExperiences().then(experiences => this.experiences = experiences);
    }

    ngOnInit() {
        this.load();
    }


}
