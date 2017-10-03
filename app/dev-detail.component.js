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
var router_deprecated_1 = require('@angular/router-deprecated');
var core_1 = require('@angular/core');
var dev_service_1 = require('./dev.service');
var dev_1 = require("./dev");
var DevDetailComponent = (function () {
    function DevDetailComponent(devService, routeParams) {
        this.devService = devService;
        this.routeParams = routeParams;
        this.close = new core_1.EventEmitter();
        this.navigated = false; // true if navigated here
    }
    DevDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.routeParams.get('id') !== null) {
            var id = +this.routeParams.get('id');
            this.navigated = true;
            this.devService.getDev(id)
                .then(function (dev) { return _this.dev = dev; });
        }
        else {
            this.navigated = false;
            this.dev = new dev_1.Dev();
        }
    };
    DevDetailComponent.prototype.save = function () {
        var _this = this;
        this.devService
            .save(this.dev)
            .then(function (dev) {
            _this.dev = dev;
            _this.goBack(dev);
        })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    DevDetailComponent.prototype.goBack = function (savedDev) {
        if (savedDev === void 0) { savedDev = null; }
        this.close.emit(savedDev);
        if (this.navigated) {
            window.history.back();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', dev_1.Dev)
    ], DevDetailComponent.prototype, "dev", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DevDetailComponent.prototype, "close", void 0);
    DevDetailComponent = __decorate([
        core_1.Component({
            selector: 'dev-detail',
            templateUrl: 'app/dev-detail.component.html',
            styleUrls: ['app/dev-detail.component.css']
        }), 
        __metadata('design:paramtypes', [dev_service_1.DevService, router_deprecated_1.RouteParams])
    ], DevDetailComponent);
    return DevDetailComponent;
}());
exports.DevDetailComponent = DevDetailComponent;
//# sourceMappingURL=dev-detail.component.js.map