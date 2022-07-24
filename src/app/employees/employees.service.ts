import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employees } from './employees';
import { environment } from 'src/environments/environment';
import { ResponseEntity } from '../base/response-entity';
import { catchError, Observable, throwError } from 'rxjs';
import { CrudService } from '../base/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService extends CrudService<Employees, Employees[]>{

  constructor(private httpClient: HttpClient) {
    super();
  }

  getApiUrl(): string {
    return "api/v1/employee";
  }
  getHttpClient(): HttpClient {
    return this.httpClient;
  }

  createFormGroup(): FormGroup {
      return new FormGroup({
          firstName: new FormControl('', Validators.required),
          lastName: new FormControl('', Validators.required),
          contactNumber: new FormControl(''),
          address: new FormControl(''),
          employeeNumber: new FormControl('', Validators.required),
          birthday: new FormControl('')
      });
  }

}
