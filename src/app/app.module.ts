import { HttpClientModule, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesModule } from './employees/employees.module';
import { ToastsContainer } from './toast/toasts-container.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AppService } from './app.service';
import { httpInterceptorProviders } from './helpers/http.interceptor';

@NgModule({
  declarations: [
    AppComponent, ToastsContainer, LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeesModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [AppService, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }


