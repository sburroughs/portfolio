System.register(['angular2/core', 'angular2/router', './dashboard.component', './skill.service', './skills.component', './skill-detail.component', './positions.component', './experience.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, dashboard_component_1, skill_service_1, skills_component_1, skill_detail_component_1, positions_component_1, experience_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (skill_service_1_1) {
                skill_service_1 = skill_service_1_1;
            },
            function (skills_component_1_1) {
                skills_component_1 = skills_component_1_1;
            },
            function (skill_detail_component_1_1) {
                skill_detail_component_1 = skill_detail_component_1_1;
            },
            function (positions_component_1_1) {
                positions_component_1 = positions_component_1_1;
            },
            function (experience_service_1_1) {
                experience_service_1 = experience_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.name = 'Shane Burroughs';
                    this.email = 'Shane.Burroughs@gmail.com';
                    this.github = '';
                    this.linkdin = '';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h1>{{name}}</h1>\n    <h2>{{email}}</h2>\n    <a href=\"/\"><md-icon md-svg-src=\"\" aria-label=\"LinkedIn\"></md-icon></a>\n    <a href=\"/\"><md-icon md-svg-src=\"\" aria-label=\"GitHub\"></md-icon></a>\n    <nav>\n      <a [routerLink]=\"['Dashboard']\">Highlights</a>\n      <a [routerLink]=\"['Skills']\">Skills</a>\n      <a [routerLink]=\"['Experience']\">Experience</a>\n    </nav>\n    <router-outlet></router-outlet>\n  ",
                        styleUrls: ['styles/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            skill_service_1.SkillService,
                            experience_service_1.ExperienceService
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/dashboard',
                            name: 'Dashboard',
                            component: dashboard_component_1.DashboardComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/skill/:name',
                            name: 'SkillDetail',
                            component: skill_detail_component_1.SkillDetailComponent
                        },
                        {
                            path: '/skills',
                            name: 'Skills',
                            component: skills_component_1.SkillsComponent
                        },
                        {
                            path: '/experience',
                            name: 'Experience',
                            component: positions_component_1.PositionsComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map