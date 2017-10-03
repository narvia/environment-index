import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated'
import {NgGrid, NgGridItem} from 'angular2-grid';

import {DevService} from './dev.service';
import {Dev} from './dev';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css'],
    directives: [NgGrid, NgGridItem]
})
export class DashboardComponent implements OnInit {
    devs:Dev[] = [];

    constructor(
        private router: Router,
        private devService: DevService) {
    }

    ngOnInit() {
        this.devService.getDevs().then(devs => this.devs = devs);
    }

    gotoDetail(dev: Dev) {
        let link = ['DevDetail', { id: dev.id }];
        this.router.navigate(link);
    }
}