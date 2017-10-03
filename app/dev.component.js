"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var dev_service_1 = require('./dev.service');
var dev_detail_component_1 = require('./dev-detail.component');
var DevsComponent = (function () {
    function DevsComponent(router, devService) {
        this.router = router;
        this.devService = devService;
    }
    DevsComponent.prototype.ngOnInit = function () {
        this.getDevs();
    };
    DevsComponent.prototype.onSelect = function (dev) {
        this.selectedDev = dev;
    };
    DevsComponent.prototype.getDevs = function () {
        var _this = this;
        this.devService
            .getDevs()
            .then(function (devs) { return _this.devs = devs; })
            .catch(function (error) { return _this.error = error; });
    };
    DevsComponent.prototype.goToDetail = function () {
        this.router.navigate(['DevDetail', { id: this.selectedDev.id }]);
    };
    DevsComponent.prototype.close = function (savedDev) {
        if (savedDev) {
            this.getDevs();
        }
    };
    DevsComponent = __decorate([
        core_1.Component({
            selector: 'dev-app',
            templateUrl: 'app/dev.component.html',
            styleUrls: ['app/dev.component.css'],
            directives: [dev_detail_component_1.DevDetailComponent]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, dev_service_1.DevService])
    ], DevsComponent);
    return DevsComponent;
}());
exports.DevsComponent = DevsComponent;
//# sourceMappingURL=dev.component.js.map