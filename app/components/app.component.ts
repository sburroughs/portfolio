import {Component} from '@angular/core';
import {SkillService} from './skills/skill.service';
import {DataProviderService} from './util/data-provider.service';

@Component({
    selector: 'portfolio',
    templateUrl: 'app/components/app.component.html',
    providers: [
        SkillService,
        DataProviderService
    ]
})
export class AppComponent {

}