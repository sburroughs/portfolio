import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {OverviewComponent} from './overview/overview.component.ts';
import {ResumeComponent} from './overview/resume.component';
import {SkillsComponent} from './skills/skills.component.ts';
import {SkillDetailComponent} from './skills/skill-detail.component.ts';
import {ExperienceComponent} from './experience/experience.component.ts';
import {PersonalComponent} from './personal/personal.component.ts';

import {SkillService} from './skills/skill.service.ts';
import {DataProviderService} from './util/data-provider.service.ts';

@Component({
    selector: 'portfolio',
    templateUrl: 'app/components/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        SkillService,
        DataProviderService
    ]
})
@RouteConfig([
    {
        path: '/overview',
        name: 'Overview',
        component: OverviewComponent,
        useAsDefault: true
    },
    {
        path: '/skill/:name',
        name: 'SkillDetail',
        component: SkillDetailComponent
    },
    {
        path: '/skills',
        name: 'Skills',
        component: SkillsComponent
    },
    {
        path: '/experience',
        name: 'Experience',
        component: ExperienceComponent
    },
    {
        path: '/personal',
        name: 'Personal',
        component: PersonalComponent
    },
    {
        path: '/resume',
        name: 'Resume',
        component: ResumeComponent
    },
])
export class AppComponent {

}