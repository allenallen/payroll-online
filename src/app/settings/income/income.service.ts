import { Injectable } from '@angular/core';
import {CrudService} from "../../base/crud.service";
import {IncomeSettings} from "./income-settings";
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class IncomeService extends CrudService<IncomeSettings, IncomeSettings[]>{

  constructor(private httpClient: HttpClient) {
    super()
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl('', Validators.required),
      fixed: new FormControl(false),
      value: new FormControl(0, Validators.required)
    });
  }

  getApiUrl(): string {
    return "api/v1/incomeSettings";
  }

  getHttpClient(): HttpClient {
    return this.httpClient;
  }
}
