import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';

import {Dev} from './dev';

@Injectable()
export class DevService {
    
    private devsUrl = 'app/devs';
    constructor(private http: Http) {}
    
    getDevs(): Promise<Dev[]> {
        return this.http.get(this.devsUrl)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    getDev(id: number) {
        return this.getDevs()
            .then(devs => devs.filter(dev => dev.id === id)[0]);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    private post(dev: Dev): Promise<Dev> {
        let headers = new Headers({
            'Content-Type': 'application/json'});
        return this.http
            .post(this.devsUrl, JSON.stringify(dev), {headers: headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    // Update existing Hero
    private put(dev: Dev) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.devsUrl}/${dev.id}`;

        return this.http
            .put(url, JSON.stringify(dev), {headers: headers})
            .toPromise()
            .then(() => dev)
            .catch(this.handleError);
    }

    delete(dev: Dev) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.devsUrl}/${dev.id}`;

        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    }

    save(dev: Dev): Promise<Dev>  {
        if (dev.id) {
            return this.put(dev);
        }
        return this.post(dev);
    }
}