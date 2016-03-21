import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {DashboardComponent} from './dashboard.component';

import {SkillService} from './skill.service';
import {SkillsComponent} from './skills.component';
import {SkillDetailComponent} from './skill-detail.component';

import {PositionsComponent} from './positions.component';

import {ExperienceService} from './experience.service';


@Component({
    selector: 'my-app',
    template: `
    <h1>{{name}}</h1>
    <h2>{{email}}</h2>
    <a href="/"><md-icon md-svg-src="" aria-label="LinkedIn"></md-icon></a>
    <a href="/"><md-icon md-svg-src="" aria-label="GitHub"></md-icon></a>
    <nav>
      <a [routerLink]="['Dashboard']">Highlights</a>
      <a [routerLink]="['Skills']">Skills</a>
      <a [routerLink]="['Experience']">Experience</a>
    </nav>
    <router-outlet></router-outlet>
  `,
    styleUrls: ['styles/app.component.css'],
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
        component: PositionsComponent
    }

])
export class AppComponent {
    name = 'Shane Burroughs';
    email = 'Shane.Burroughs@gmail.com';
    github = '';
    linkdin = '';


}