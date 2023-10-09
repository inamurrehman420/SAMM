import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyOnboardingComponent } from './companyOnboarding/companyOnboarding.component';

const routes: Routes = [
  {
    path:'',component:CompanyOnboardingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyOnboardingRoutingModule { }
