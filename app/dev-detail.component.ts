import {RouteParams} from '@angular/router-deprecated';
import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';

import {DevService} from './dev.service';
import {Dev} from "./dev";

@Component({
    selector: 'dev-detail',
    templateUrl: 'app/dev-detail.component.html',
    styleUrls: ['app/dev-detail.component.css']
})
export class DevDetailComponent implements OnInit {
    @Input() dev: Dev;
    @Output() close = new EventEmitter();
    error: any;
    navigated = false; // true if navigated here

    constructor(
        private devService:DevService,
        private routeParams:RouteParams
    ) {}

    ngOnInit() {
        if (this.routeParams.get('id') !== null) {
            let id = +this.routeParams.get('id');
            this.navigated = true;
            this.devService.getDev(id)
                .then(dev => this.dev = dev);
        } else {
            this.navigated = false;
            this.dev = new Dev();
        }
    }

    save() {
        this.devService
            .save(this.dev)
            .then(dev => {
                this.dev = dev;
                this.goBack(dev);
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

    goBack(savedDev: Dev = null) {
        this.close.emit(savedDev);
        if (this.navigated) {window.history.back();}
    }
}