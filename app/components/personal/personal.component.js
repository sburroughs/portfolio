System.register(['@angular/core', '../util/data-provider.service'], function(exports_1, context_1) {
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
    var core_1, data_provider_service_1;
    var PersonalComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_provider_service_1_1) {
                data_provider_service_1 = data_provider_service_1_1;
            }],
        execute: function() {
            PersonalComponent = (function () {
                function PersonalComponent(_dataProvider) {
                    this._dataProvider = _dataProvider;
                    this.flipFlag = false;
                    // NO-OP
                }
                PersonalComponent.prototype.get = function () {
                    var _this = this;
                    this._dataProvider.getPersonal().then(function (about) { return _this.about = about; });
                };
                PersonalComponent.prototype.ngOnInit = function () {
                    this.get();
                };
                PersonalComponent.prototype.getHyperlink = function (h) {
                    this.flipFlag = !this.flipFlag;
                    return h.hyperlink;
                };
                PersonalComponent = __decorate([
                    core_1.Component({
                        selector: 'personal',
                        templateUrl: 'app/components/personal/personal.component.html',
                    }), 
                    __metadata('design:paramtypes', [data_provider_service_1.DataProviderService])
                ], PersonalComponent);
                return PersonalComponent;
            }());
            exports_1("PersonalComponent", PersonalComponent);
        }
    }
});
//# sourceMappingURL=personal.component.js.map