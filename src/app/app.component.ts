import { Component, OnInit } from '@angular/core';
import { ReferenceService } from './services/reference.service';
import { Employee } from './models/employee';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'Angular Service app';
  employeesInfo: Employee;
  data: any;
  constructor(public referService: ReferenceService, public http: Http) { }
  getAllEmployees() {
    this.referService.getAllEmployees()
      .subscribe((result: Employee) => {
       console.log('the employess data:' + result);
       this.employeesInfo = result;
      },
      (error: any) => {
        console.log('done employees method');
      });
   }
    allemployees() {
         this.http.get('JsonFile/service.json')
                .subscribe(res => this.data = res.json());
    }
    ngOnInit() {
      this.getAllEmployees();
      this.allemployees();
      console.log(this.data);
    }
}
