import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path: 'employees', redirectTo:'employees/index', pathMatch: 'full'},
  {path: 'employees/index', component: IndexComponent},
  {path: 'employees/:id/view', component:ViewComponent},
  {path: 'employees/create', component: CreateComponent},
  {path: 'employees/:id/edit', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
