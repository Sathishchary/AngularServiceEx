import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Employee } from '../models/employee';
import { ALLEMPS } from '../models/employees';

@Injectable()
export class ReferenceService {

  constructor(private http: Http) { }
  getAllEmps(): Promise<Employee[]> {
    return Promise.resolve(ALLEMPS);
  }
  getAllEmployees(): Observable<any> {
    try {
       return this.http.get('JsonFile/service.json');
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
