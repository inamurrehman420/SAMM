import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppointmentComponent } from "./appointments/appointments.component";
import { AppointmentActivityComponent } from "./appointment-activity/appointment-activity.component";

const routes: Routes = [
  {
    path: "",
    component: AppointmentComponent,
  },

  {
    path: "activity-details",
    component: AppointmentActivityComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentRoutingModule {}
