import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {Dev} from './dev';
import {DevService} from './dev.service';
import {DevDetailComponent} from './dev-detail.component';

@Component({
    selector: 'dev-app',
    templateUrl: 'app/dev.component.html',
    styleUrls: ['app/dev.component.css'],
    directives: [DevDetailComponent]
})

export class DevsComponent implements OnInit {
    devs:Dev[];
    selectedDev:Dev;
    error: any;

    constructor(
        private router:Router,
        private devService:DevService
    ) {}

    ngOnInit() {
        this.getDevs();
    }

    onSelect(dev:Dev) {
        this.selectedDev = dev;
    }

    getDevs() {
        this.devService
            .getDevs()
            .then(devs => this.devs = devs)
            .catch(error => this.error = error);
    }

    goToDetail() {
        this.router.navigate(['DevDetail', {id:this.selectedDev.id}]);
    }

    close(savedDev: Dev) {
        if (savedDev) { this.getDevs(); }
    }
}