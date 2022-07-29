import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LoginService } from './login/login.service';
import { StorageService } from './storage/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = environment.title;
  baseUrl = environment.baseUrl;
  isLoggedIn = false;
  username?: string;

  constructor(public loginService: LoginService, public storage: StorageService, private http: HttpClient, private router: Router) {
    this.isLoggedIn = storage.isLoggedIn();
    if (this.isLoggedIn) {
      this.username = storage.getUser()?.username;
    }
  }

  logout() {
    this.loginService.logout().subscribe({
      next: res => {
        this.storage.clean();
        this.router.navigateByUrl('/');
        this.isLoggedIn = this.storage.isLoggedIn();
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
