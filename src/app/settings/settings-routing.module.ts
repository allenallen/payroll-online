import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DeductionComponent} from "./deduction/deduction.component";
import {IncomeComponent} from "./income/income.component";

const routes: Routes = [
  {path: 'deductionTypes', component:DeductionComponent},
  {path: 'incomeSettings', component: IncomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
