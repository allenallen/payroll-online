import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ResponseEntity } from 'src/app/base/response-entity';
import { Employees } from '../employees';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  createForm!: FormGroup;

  @Output() createResult: EventEmitter<ResponseEntity<Employees>> = new EventEmitter();

  constructor(public activeModal: NgbActiveModal, private employeeService: EmployeesService) { }

  ngOnInit(): void {
    this.createForm = this.employeeService.createFormGroup();
  }

  get form() {
    return this.createForm.controls;
  }

  submit() {
    if (this.createForm.valid) {
      this.employeeService.create(this.createForm.value).subscribe(res => {
        this.createResult.emit(res);
      });
    }
  }
}
