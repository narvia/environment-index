import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { DevsComponent } from './dev.component';
import { DashboardComponent } from './dashboard.component';
import { DevService } from './dev.service';
import { DevDetailComponent } from "./dev-detail.component";


@Component({
    selector: 'index-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a [routerLink]="['Dashboard']">Dashboard view</a>
            <a [routerLink]="['Devs']">List view</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        DevService
    ]
})

@RouteConfig([
    {
        path: '/devs',
        name: 'Devs',
        component: DevsComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/detail/:id',
        name: 'DevDetail',
        component: DevDetailComponent
    }
])

export class AppComponent {
    title = 'Environment Index';
}