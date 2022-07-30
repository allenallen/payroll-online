import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ResponseEntity} from "../../../base/response-entity";
import {IncomeSettings} from "../income-settings";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {IncomeService} from "../income.service";

@Component({
  selector: 'app-income-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class IncomeCreateComponent implements OnInit {

  createForm!: FormGroup;
  percentage: boolean = true;

  @Output() createResult: EventEmitter<ResponseEntity<IncomeSettings>> = new EventEmitter();

  constructor(public activeModal: NgbActiveModal, private incomeSettingsService: IncomeService) { }

  ngOnInit(): void {
    this.createForm = this.incomeSettingsService.createFormGroup();
  }

  get form() {
    return this.createForm.controls;
  }

  submit() {
    if (this.createForm.valid) {
      this.incomeSettingsService.create(this.createForm.value).subscribe(res => {
        this.createResult.emit(res);
      })
    }
  }
}
