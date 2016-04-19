System.register(['angular2/core', 'angular2/router', './overview/overview.component.ts', './skills/skills.component.ts', './skills/skill-detail.component.ts', './experience/experience.component.ts', './personal/personal.component.ts', './skills/skill.service.ts', './util/data-provider.service.ts'], function(exports_1, context_1) {
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
    var core_1, router_1, overview_component_ts_1, skills_component_ts_1, skill_detail_component_ts_1, experience_component_ts_1, personal_component_ts_1, skill_service_ts_1, data_provider_service_ts_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (overview_component_ts_1_1) {
                overview_component_ts_1 = overview_component_ts_1_1;
            },
            function (skills_component_ts_1_1) {
                skills_component_ts_1 = skills_component_ts_1_1;
            },
            function (skill_detail_component_ts_1_1) {
                skill_detail_component_ts_1 = skill_detail_component_ts_1_1;
            },
            function (experience_component_ts_1_1) {
                experience_component_ts_1 = experience_component_ts_1_1;
            },
            function (personal_component_ts_1_1) {
                personal_component_ts_1 = personal_component_ts_1_1;
            },
            function (skill_service_ts_1_1) {
                skill_service_ts_1 = skill_service_ts_1_1;
            },
            function (data_provider_service_ts_1_1) {
                data_provider_service_ts_1 = data_provider_service_ts_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.name = 'Shane Burroughs';
                    this.email = 'Shane.Burroughs@gmail.com';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'portfolio',
                        template: "\n    <nav>\n      <a [routerLink]=\"['Overview']\">Overview</a>\n      <a [routerLink]=\"['Skills']\">Skills</a>\n      <a [routerLink]=\"['Experience']\">Experience</a>\n      <a [routerLink]=\"['Personal']\">Personal</a>\n    </nav>\n    <router-outlet></router-outlet>\n  ",
                        styleUrls: ['assets/css/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            skill_service_ts_1.SkillService,
                            data_provider_service_ts_1.DataProviderService
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/overview',
                            name: 'Overview',
                            component: overview_component_ts_1.OverviewComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/skill/:name',
                            name: 'SkillDetail',
                            component: skill_detail_component_ts_1.SkillDetailComponent
                        },
                        {
                            path: '/skills',
                            name: 'Skills',
                            component: skills_component_ts_1.SkillsComponent
                        },
                        {
                            path: '/experience',
                            name: 'Experience',
                            component: experience_component_ts_1.ExperienceComponent
                        },
                        {
                            path: '/personal',
                            name: 'Personal',
                            component: personal_component_ts_1.PersonalComponent
                        },
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