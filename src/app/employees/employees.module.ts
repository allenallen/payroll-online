import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EmployeesRoutingModule} from './employees-routing.module';
import {IndexComponent} from './index/index.component';
import {ViewComponent} from './view/view.component';
import {CreateComponent} from './create/create.component';
import {EditComponent} from './edit/edit.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbModule, NgbTooltip} from '@ng-bootstrap/ng-bootstrap';
import {CompensationComponent} from './compensation/compensation.component';
import {httpInterceptorProviders} from '../helpers/http.interceptor';


@NgModule({
  declarations: [
    IndexComponent,
    ViewComponent,
    CreateComponent,
    EditComponent,
    CompensationComponent
  ],
  imports: [
    EmployeesRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule,
    CommonModule
  ],
  providers: [
    NgbTooltip
  ]
})
export class EmployeesModule { }
