import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../storage/storage.service';
import { LoginModel } from './login';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials: LoginModel = {id: 0, username: '', password: '', name: '', roles: []};
  isLoggedIn = false;
  isLogInError = false;
  errorMessage = '';
  roles: string[] = [];
  
  constructor(private authService: LoginService, private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.router.navigateByUrl('/employees');
    }
  }

  login() {
    this.authService.login(this.credentials).subscribe({
      next: res => {
        this.storageService.saveUser(res.body);
        this.isLogInError = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser()!.roles;
        this.reloadPage();
      }, 
      error: err => {
        console.log(err);
        this.errorMessage = err.error.errorMessage;
        this.isLogInError = true;
      }
    });
  }

  reloadPage() {
    window.location.reload();
  }
}
