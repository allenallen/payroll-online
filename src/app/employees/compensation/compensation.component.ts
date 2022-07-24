import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ResponseEntity } from 'src/app/base/response-entity';
import { CompensationService } from '../compensation.service';
import { EmployeeCompensation } from '../employee-compensation';

@Component({
  selector: 'app-compensation',
  templateUrl: './compensation.component.html',
  styleUrls: ['./compensation.component.scss']
})
export class CompensationComponent implements OnInit {

  @Input() public employeeCompensation!:EmployeeCompensation;
  @Output() editResult: EventEmitter<ResponseEntity<EmployeeCompensation>> = new EventEmitter();

  compensationForm!: FormGroup;

  constructor(public activeModal: NgbActiveModal, private employeeCompensationService: CompensationService) { }

  ngOnInit(): void {
    if (!this.employeeCompensation) this.editResult.emit(undefined);
    this.compensationForm = this.employeeCompensationService.createFormGroup();
  }

  get form() {
    return this.compensationForm.controls;
  }

  submit() {
    if (this.compensationForm.valid) {
      this.employeeCompensationService.update(this.employeeCompensation.id, this.employeeCompensation)
        .subscribe(res => {
          if (res.body) {
            this.editResult.emit(res);
          } else {
            this.editResult.emit(undefined);
          }
        });
    }
  }

}
