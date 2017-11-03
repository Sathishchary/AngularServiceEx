import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Employee } from '../models/employee';

@Injectable()
export class ReferenceService {

    constructor(private http: Http) { }

    getAllEmployees(): Observable<any> {
        try {
            return this.http.get('assets/service.json')   // web service API. its pointing to http://localhost:4200/assets/service.json
                .map(this.extractData)
                .catch(this.handleError);
        } catch (error) { console.log(error); }
    }
    extractData(res: any) {
        const body = res.json();
        console.log(body);
        return body || {};
    }
    handleError(error: any) {
        const errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server   error';
        return Observable.throw(error);
    }

}
