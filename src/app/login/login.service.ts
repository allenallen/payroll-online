import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseEntity } from '../base/response-entity';
import { LoginModel } from './login';

const loginApi = environment.baseUrl + 'api/auth/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient, private router: Router) { }

  login(user: LoginModel): Observable<ResponseEntity<LoginModel>> {
    return this.http.post<ResponseEntity<LoginModel>>(loginApi + 'login', JSON.stringify(user), httpOptions);
  }

  logout() {
    return this.http.post<ResponseEntity<string>>(loginApi + 'logout', httpOptions);
  }
}
