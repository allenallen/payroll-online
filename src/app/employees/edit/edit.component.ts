import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ResponseEntity } from 'src/app/base/response-entity';
import { Employees } from '../employees';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  editForm!: FormGroup;
  @Input() public employee!:Employees;
  @Output() editResult: EventEmitter<ResponseEntity<Employees>> = new EventEmitter();

  constructor(private employeeService: EmployeesService, private route: ActivatedRoute,
        public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    if (!this.employee) {
      this.editResult.emit(undefined);
    }
    
    this.employeeService.find(this.employee.id).subscribe(res => {
      if (res.body) {
        this.employee = res.body;
      } else {
        this.editResult.emit(undefined);
      }
    });

    this.editForm = this.employeeService.createFormGroup();
  }

  get form() {
    return this.editForm.controls;
  }

  submit() {
    if (this.editForm.valid) {
      this.employeeService.update(this.employee.id, this.employee).subscribe(res => {
        if (res.body) {
          this.editResult.emit(res);
        } else {
          this.editResult.emit(undefined);
        }
      });
    }
  }
}
