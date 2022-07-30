import { Component, OnInit } from '@angular/core';
import {IncomeSettings} from "./income-settings";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "../../toast/toast.service";
import {IncomeService} from "./income.service";
import {IncomeCreateComponent} from "./create/create.component";
import {ResponseEntity} from "../../base/response-entity";

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {

  incomeSettings: IncomeSettings[] = [];

  constructor(public incomeSettingsService: IncomeService, private modal: NgbModal, private toast:ToastService) { }

  ngOnInit(): void {
    this.initIncomeSettings();
  }

  onCreateClick() {
    let createModal = this.modal.open(IncomeCreateComponent);
    createModal.componentInstance.createResult.subscribe((res: ResponseEntity<IncomeSettings>) => {
      this.initIncomeSettings();
      this.toast.show('Successfully added', {classname: 'bg-success text-light'});
      createModal.dismiss();
    });
  }

  onDeleteClick(incomeSettings: IncomeSettings) {
    this.incomeSettingsService.delete(incomeSettings.id).subscribe(res => {
      this.initIncomeSettings();
      this.toast.show(res.message, {classname: 'bg-success text-light'});
    })
  }

  initIncomeSettings() {
    this.incomeSettingsService.getAll().subscribe(res => {
      this.incomeSettings = res.body;
    })
  }

}
