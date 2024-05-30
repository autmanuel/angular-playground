import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AllEmployeesApiResponse, Employee} from "./employees.models";
import {map, Observable, tap} from "rxjs";
/*
1	/employee	GET	JSON	https://dummy.restapiexample.com/api/v1/employees	Get all employee data	Details
2	/employee/{id}	GET	JSON	https://dummy.restapiexample.com/api/v1/employee/1	Get a single employee data	Details
3	/create	POST	JSON	https://dummy.restapiexample.com/api/v1/create	Create new record in database	Details
4	/update/{id}	PUT	JSON	https://dummy.restapiexample.com/api/v1/update/21	Update an employee record	Details
5	/delete/{id}	DELETE	JSON	https://dummy.restapiexample.com/api/v1/delete/2	Delete an employee record	Details

 */
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
httpCLient = inject(HttpClient)
  constructor() { }


  getEmployees(): Observable<Employee[]> {
  return this.httpCLient.get<AllEmployeesApiResponse>('https://dummy.restapiexample.com/api/v1/employees').pipe(
    map(apiResponse => {
    return apiResponse.data;
  }));
  }

  getEmployeeById(id : string){

  }

  createEmployee(){

  }
  updateEmployeeById(id : string){
  }
  deleteEmployeeById(id : string){

  }

}
