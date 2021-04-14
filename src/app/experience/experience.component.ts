import {Component, OnInit} from '@angular/core';
import {Experience} from './experience';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ContentManagementService} from '../util/content-management.service';

@Component({
    selector: 'experience',
    templateUrl: 'experience.component.html',
})
export class ExperienceComponent implements OnInit {
    public experiences: Experience[] = [];

    constructor(private cms: ContentManagementService,
                private modalService: NgbModal) {
        // NO-OP
    }

    open(content): void {
        this.modalService.open(content).result.then((result) => {

        }, (reason) => {

        });
    }

    load(): void {
        this.cms.getExperiences().then(experiences => this.experiences = experiences);
    }

    ngOnInit(): void {
        this.load();
    }


}
