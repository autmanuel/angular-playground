import {Component, ElementRef, inject, OnInit, viewChild} from '@angular/core';
import {EmployeesService} from "./employees.service";
import {demoData, Employee} from "./employees.models";
import {CurrencyPipe, JsonPipe} from "@angular/common";
import {UppercasePipe} from "../../ui/uppercase.pipe";

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [
    JsonPipe,
    CurrencyPipe,
    UppercasePipe
  ],
  template: `
    <table class="table-auto w-full bg-slate-700 ">
      <thead>
      <tr class="border-gray-500 border-2">
        <th class="p-2">ID</th>
        <th class="p-2">Name</th>
        <th class="p-2">Salary</th>
        <th class="p-2">Age</th>
        <th class="p-2 pr-5">Action</th>
      </tr>
      </thead>
      <tbody>
        @for (employee of employees; track employee; let i = $index) {
          <tr class="border-gray-500 border-2">
            <td class="p-2">{{ employee.id }}</td>
            <td class="p-2">{{ employee.employee_name | uppercase }}</td>
            <td class="p-2">{{ employee.employee_salary | currency:'EUR':true }}</td>
            <td class="p-2">{{ employee.employee_age }}</td>
            <td (click)="deleteEmployee(employee.id)" class="p-2 flex justify-end cursor-pointer hover:scale-110 pr-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
              </svg>
            </td>
          </tr>
        }
      </tbody>
    </table>
    @for (employee of employees; track employee; let i = $index) {
      <div>{{ employee | json }}</div>
    }
  `,
  styles: ``
})
export class EmployeesComponent implements OnInit {
  employeesService = inject(EmployeesService);
  employees: Employee[] = demoData;

  ngOnInit() {
    /*this.employeesService.getEmployees().subscribe(employees => {
      this.employees = employees;
      console.log(this.employees);
    });*/
  }

  deleteEmployee(id: number) {
    // mistkübel click function DIESE FUNKION AUFRUFEN!!
    // thi.employees.filter < nutze filter
    this.employees = this.employees.filter((employee) => {
      return employee.id !== id
    })
  }
  }
