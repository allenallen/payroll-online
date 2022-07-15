import { Component, OnInit } from '@angular/core';
import { Employees } from '../employees';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  employees: Employees[] = [];

  constructor(public employeeService: EmployeesService) { }

  ngOnInit(): void {
    this.employeeService.getAll().subscribe(res => {
      this.employees = res.body;
      console.log(this.employees)
    })
  }

}
