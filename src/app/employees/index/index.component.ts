import { Component, OnInit } from '@angular/core';
import { Employees } from '../employees';
import { EmployeesService } from '../employees.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateComponent } from '../create/create.component';
import { ResponseEntity } from 'src/app/base/response-entity';
import { ToastService } from 'src/app/toast/toast.service';
import { EditComponent } from '../edit/edit.component';
import { EmployeeCompensation } from '../employee-compensation';
import { CompensationService } from '../compensation.service';
import { CompensationComponent } from '../compensation/compensation.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  employees: Employees[] = [];
  employeesCompensation: EmployeeCompensation[] = [];

  constructor(public employeeService: EmployeesService, private modalService: NgbModal,
            private toastService: ToastService, public employeeCompensationService: CompensationService) { }

  ngOnInit(): void {
   this.initEmployees();
  }

  onCreateClick() {
    let createModal = this.modalService.open(CreateComponent);
    createModal.componentInstance.createResult.subscribe((res: ResponseEntity<Employees>) => {
      if (res.message === "Success") {
        this.initEmployees();
        this.toastService.show('Added successfully', {classname: 'bg-success text-light'});
        createModal.dismiss();
      }
    })
  }

  onUpdateClick(employee:Employees) {
    let updateModal = this.modalService.open(EditComponent);
    updateModal.componentInstance.employee = employee;
    updateModal.componentInstance.editResult.subscribe((res: ResponseEntity<Employees>) => {
      if (res) {
        this.initEmployees();
        this.toastService.show('Updated successfully', {classname: 'bg-success text-light'});
        updateModal.dismiss();
      } else {
        this.initEmployees();
        this.toastService.show('Something went wrong', {classname: 'bg-danger text-light'})
      }
    });
  }

  onViewEmployeeCompensationClick(employee: Employees) {
    let employeeCompensationModal = this.modalService.open(CompensationComponent);
    const employeeCompensation = this.getEmployeeCompensation(employee);
    employeeCompensationModal.componentInstance.employeeCompensation = employeeCompensation;

    employeeCompensationModal.componentInstance.editResult.subscribe((res: ResponseEntity<EmployeeCompensation>) => {
      if (res) {
        this.initEmployees();
        this.toastService.show('Updated successfully', {classname: 'bg-success text-light'});
        employeeCompensationModal.dismiss();
      } else {
        this.initEmployees();
        this.toastService.show('Something went wrong', {classname: 'bg-danger text-light'})
      }
    });
  }

  initEmployees() {
    this.employeeService.getAll().subscribe(res => {
      this.employees = res.body
    });

    this.employeeCompensationService.getAll().subscribe(res => {
      this.employeesCompensation = res.body;
    });
  }

  getEmployeeCompensation(employee:Employees) {
    return this.employeesCompensation.find(e => e.employee.id === employee.id);
  }

}
