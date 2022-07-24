import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesModule } from './employees/employees.module';
import { ToastsContainer } from './toast/toasts-container.component';

@NgModule({
  declarations: [
    AppComponent, ToastsContainer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeesModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
