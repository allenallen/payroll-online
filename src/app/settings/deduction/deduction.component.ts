import { Component, OnInit } from '@angular/core';
import {DeductionType} from "./deduction-type";
import {DeductionService} from "./deduction.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "../../toast/toast.service";
import {CreateComponent} from "./create/create.component";
import {ResponseEntity} from "../../base/response-entity";

@Component({
  selector: 'app-deduction',
  templateUrl: './deduction.component.html',
  styleUrls: ['./deduction.component.scss']
})
export class DeductionComponent implements OnInit {

  deductionTypes: DeductionType[] = [];

  constructor(public deductionTypeService: DeductionService, private modal:NgbModal, private toast: ToastService) { }

  ngOnInit(): void {
    this.initDeductionTypes();
  }

  onCreateClick() {
    let createModal = this.modal.open(CreateComponent);
    createModal.componentInstance.createResult.subscribe((res: ResponseEntity<DeductionType>) => {
      this.initDeductionTypes();
      this.toast.show('Successfully added', {classname: 'bg-success text-light'});
      createModal.dismiss();
    });
  }

  onDeleteClick(deductionType: DeductionType) {
    this.deductionTypeService.delete(deductionType.id).subscribe(res => {
      this.initDeductionTypes();
      this.toast.show(res.message, {classname: 'bg-success text-light'});
    })
  }

  governmentType(deductionType: DeductionType) {
    return deductionType.type.toLowerCase() === 'pagibig' || deductionType.type.toLowerCase() === 'sss' || deductionType.type.toLowerCase() === 'philhealth';
  }

  initDeductionTypes() {
    this.deductionTypeService.getAll().subscribe(res => {
      this.deductionTypes = res.body;
    })
  }
}
