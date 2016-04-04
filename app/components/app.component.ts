import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {DashboardComponent} from './dashboard/dashboard.component.ts';
import {SkillsComponent} from './skills/skills.component.ts';
import {SkillDetailComponent} from './skills/skill-detail.component.ts';
import {ExperienceComponent} from './experience/experience.component.ts';
import {PersonalComponent} from './personal/personal.component.ts';

import {SkillService} from './skills/skill.service.ts';
import {ExperienceService} from './experience/experience.service.ts';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{name}}</h1>
    <h1>{{email}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Overview</a>
      <a [routerLink]="['Skills']">Skills</a>
      <a [routerLink]="['Experience']">Experience</a>
      <a [routerLink]="['Personal']">Personal</a>
    </nav>
    <router-outlet></router-outlet>
  `,
    styleUrls: ['assets/css/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        SkillService,
        ExperienceService
    ]
})
@RouteConfig([
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
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

])
export class AppComponent {
    name = 'Shane Burroughs';
    email = 'Shane.Burroughs@gmail.com';
    github = '';
    linkdin = '';
}