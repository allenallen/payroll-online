import { Injectable } from '@angular/core';
import {CrudService} from "../../base/crud.service";
import {DeductionType} from "./deduction-type";
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class DeductionService extends CrudService<DeductionType, DeductionType[]>{

  constructor(private httpClient: HttpClient) {
    super()
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      type: new FormControl('', Validators.required)
    });
  }

  getApiUrl(): string {
    return "api/v1/deductionType";
  }

  getHttpClient(): HttpClient {
    return this.httpClient;
  }
}
