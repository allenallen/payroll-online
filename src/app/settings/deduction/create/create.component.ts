import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormGroup} from "@angular/forms";
import {ResponseEntity} from "../../../base/response-entity";
import {DeductionType} from "../deduction-type";
import {DeductionService} from "../deduction.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  createForm!: FormGroup;

  @Output() createResult: EventEmitter<ResponseEntity<DeductionType>> = new EventEmitter();

  constructor(public activeModal: NgbActiveModal, private deductionTypeService: DeductionService) { }

  ngOnInit(): void {
    this.createForm = this.deductionTypeService.createFormGroup();
  }

  get form() {
    return this.createForm.controls;
  }

  submit() {
    if (this.createForm.valid) {
      this.deductionTypeService.create(this.createForm.value).subscribe(res => {
        this.createResult.emit(res);
      });
    }
  }

}
