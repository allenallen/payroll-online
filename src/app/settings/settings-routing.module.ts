import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DeductionComponent} from "./deduction/deduction.component";

const routes: Routes = [
  {path: 'deductionTypes', component:DeductionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
