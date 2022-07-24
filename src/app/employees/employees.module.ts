import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastsContainer } from '../toast/toasts-container.component';
import { NgbModule, NgbToastModule, NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { CompensationComponent } from './compensation/compensation.component';


@NgModule({
  declarations: [
    IndexComponent,
    ViewComponent,
    CreateComponent,
    EditComponent,
    CompensationComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    NgbTooltip
  ]
})
export class EmployeesModule { }
