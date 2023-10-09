import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLogsComponent } from './userLogs/userLogs.component';

const routes: Routes = [
  {
    path:'',component:UserLogsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserLogsRoutingModule { }
