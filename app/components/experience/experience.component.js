System.register(['angular2/core', '../util/data-provider.service.ts'], function(exports_1, context_1) {
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
    var core_1, data_provider_service_ts_1;
    var ExperienceComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_provider_service_ts_1_1) {
                data_provider_service_ts_1 = data_provider_service_ts_1_1;
            }],
        execute: function() {
            ExperienceComponent = (function () {
                function ExperienceComponent(_experienceService) {
                    this._experienceService = _experienceService;
                }
                ExperienceComponent.prototype.get = function () {
                    var _this = this;
                    this._experienceService.getPositions().then(function (experiences) { return _this.experiences = experiences; });
                };
                ExperienceComponent.prototype.ngOnInit = function () {
                    this.get();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], ExperienceComponent.prototype, "experiences", void 0);
                ExperienceComponent = __decorate([
                    core_1.Component({
                        selector: 'positions',
                        templateUrl: 'app/components/experience/experience.component.html',
                        styleUrls: ['assets/css/skills.component.css']
                    }), 
                    __metadata('design:paramtypes', [data_provider_service_ts_1.DataProviderService])
                ], ExperienceComponent);
                return ExperienceComponent;
            }());
            exports_1("ExperienceComponent", ExperienceComponent);
        }
    }
});
//# sourceMappingURL=experience.component.js.map