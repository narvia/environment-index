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
var http_1 = require("@angular/http");
require('rxjs/add/operator/toPromise');
var DevService = (function () {
    function DevService(http) {
        this.http = http;
        this.devsUrl = 'app/devs';
    }
    DevService.prototype.getDevs = function () {
        return this.http.get(this.devsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    DevService.prototype.getDev = function (id) {
        return this.getDevs()
            .then(function (devs) { return devs.filter(function (dev) { return dev.id === id; })[0]; });
    };
    DevService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    DevService.prototype.post = function (dev) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json' });
        return this.http
            .post(this.devsUrl, JSON.stringify(dev), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    // Update existing Hero
    DevService.prototype.put = function (dev) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.devsUrl + "/" + dev.id;
        return this.http
            .put(url, JSON.stringify(dev), { headers: headers })
            .toPromise()
            .then(function () { return dev; })
            .catch(this.handleError);
    };
    DevService.prototype.delete = function (dev) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.devsUrl + "/" + dev.id;
        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    };
    DevService.prototype.save = function (dev) {
        if (dev.id) {
            return this.put(dev);
        }
        return this.post(dev);
    };
    DevService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DevService);
    return DevService;
}());
exports.DevService = DevService;
//# sourceMappingURL=dev.service.js.map