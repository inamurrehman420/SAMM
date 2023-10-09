import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientOnboardingComponent } from './client-onboarding/client-onboarding.component';

const routes: Routes = [
  {
    path:'',component:ClientOnboardingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientOnboardingRoutingModule { }
