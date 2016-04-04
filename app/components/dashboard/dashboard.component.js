System.register(['angular2/core', 'angular2/router', './../skills/skill.service.ts', '../experience/experience.component.ts'], function(exports_1, context_1) {
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
    var core_1, router_1, skill_service_ts_1, experience_component_ts_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (skill_service_ts_1_1) {
                skill_service_ts_1 = skill_service_ts_1_1;
            },
            function (experience_component_ts_1_1) {
                experience_component_ts_1 = experience_component_ts_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent(_router, _skillService) {
                    this._router = _router;
                    this._skillService = _skillService;
                    this.skills = [];
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._skillService.getSkills()
                        .then(function (skills) { return _this.skills = skills.slice(0, 4); });
                };
                DashboardComponent.prototype.gotoDetail = function (skill) {
                    var link = ['SkillDetail', { name: skill.name }];
                    this._router.navigate(link);
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'my-dashboard',
                        templateUrl: 'app/components/dashboard/dashboard.component.html',
                        styleUrls: ['assets/css/dashboard.component.css'],
                        directives: [experience_component_ts_1.ExperienceComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, skill_service_ts_1.SkillService])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.component.js.map