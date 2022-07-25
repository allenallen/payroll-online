import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseEntity } from './base/response-entity';
import { LoginModel } from './login/login';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  authenticated = false;

  constructor(private http: HttpClient) {

  }

  authenticate(credentials: LoginModel, callback: () => void) {
    const headers = new HttpHeaders(credentials ? {
      authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.get<ResponseEntity<LoginModel>>(environment.baseUrl + 'api/v1/user', {headers: headers}).subscribe(res => {
      if (res.body.name) {
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }

      return callback && callback();
    });
  }
}
