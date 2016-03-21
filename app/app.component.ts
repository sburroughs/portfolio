import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { SkillService } from './skill.service';
import { DashboardComponent } from './dashboard.component';
import { SkillsComponent } from './skills.component';
import { SkillDetailComponent } from './skill-detail.component';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <div>
        <h2>http://www.dsburroughs.com</h2>
        <h2>Shane.Burroughs@gmail.com</h2>
        <h2>Phone: (240) 925 - 5055</h2>
    </div>
    <nav>
      <a [routerLink]="['Dashboard']">Overview</a>
      <a [routerLink]="['Skills']">Skills</a>
    </nav>
    <router-outlet></router-outlet>
  `,
    styleUrls: ['styles/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        SkillService
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
    }
])
export class AppComponent {
    title = 'Shane Burroughs';

}