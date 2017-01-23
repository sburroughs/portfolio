System.register(['@angular/core', './skill.service'], function(exports_1, context_1) {
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
    var core_1, skill_service_1;
    var SkillsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (skill_service_1_1) {
                skill_service_1 = skill_service_1_1;
            }],
        execute: function() {
            SkillsComponent = (function () {
                function SkillsComponent(_skillService) {
                    this._skillService = _skillService;
                }
                SkillsComponent.prototype.getSkills = function () {
                    var _this = this;
                    this._skillService.getSkills().then(function (skills) {
                        _this.skills = skills;
                        _this.selectedSkill = skills[0];
                    });
                };
                SkillsComponent.prototype.ngOnInit = function () {
                    this.getSkills();
                };
                SkillsComponent.prototype.onSelect = function (skill) {
                    this.selectedSkill = skill;
                };
                SkillsComponent = __decorate([
                    core_1.Component({
                        selector: 'skills',
                        templateUrl: 'app/components/skills/skills.component.html',
                    }), 
                    __metadata('design:paramtypes', [skill_service_1.SkillService])
                ], SkillsComponent);
                return SkillsComponent;
            }());
            exports_1("SkillsComponent", SkillsComponent);
        }
    }
});
//# sourceMappingURL=skills.component.js.map