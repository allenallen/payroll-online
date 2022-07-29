import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../base/crud.service';
import { EmployeeCompensation } from './employee-compensation';

@Injectable({
  providedIn: 'root'
})
export class CompensationService extends CrudService<EmployeeCompensation, EmployeeCompensation[]>{

  constructor(private httpClient: HttpClient) {
    super();
  }

  getApiUrl(): string {
    return 'api/v1/employeeCompensation'
  }

  getHttpClient(): HttpClient {
    return this.httpClient;
  }

  createFormGroup(): FormGroup<any> {
    return new FormGroup({
      id: new FormControl('', Validators.required),
      daily: new FormControl(''),
      sss: new FormControl(false),
      philhealth: new FormControl(false),
      pagibig: new FormControl(false)
    });
  }

}
