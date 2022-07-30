import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import {NgbModule, NgbTooltip} from "@ng-bootstrap/ng-bootstrap";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import { CreateComponent } from './deduction/create/create.component';
import {IncomeCreateComponent} from './income/create/create.component';
import { IncomeComponent } from './income/income.component';


@NgModule({
  declarations: [
    CreateComponent,
    IncomeComponent,
    IncomeCreateComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    NgbTooltip
  ]
})
export class SettingsModule { }
