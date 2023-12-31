import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { AuthGuard } from "src/app/shared/guards/auth.guard";
import { AdminAccessGuard } from "src/app/shared/guards/admin-access.guard";
import { LoginComponent } from "../auth/login/login.component";
import { SettingsComponent } from "./settings/settings.component";

const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "dashboard",
        loadChildren: () =>
          import("src/app/modules/dashboard/dashboard.module").then(
            (m) => m.DashboardModule
          ),
      },

      {
        path: "appointments",
        loadChildren: () =>
          import("src/app/modules/appointments/recipe.module").then(
            (m) => m.RecipeModule
                      ),
      },

      {
        path: "teamManagment",
        loadChildren: () =>
          import("src/app/modules/teamManagment/teamManagment.module").then(
            (m) => m.TeamManagmentModule
          ),
      },
     {
        path: "userLogs",
        loadChildren: () =>
          import("src/app/modules/userLogs/userLogs.module").then(
            (m) => m.UserLogsModule
          ),
      },

     
    ],
  },

  {
    path: "",
    component: LoginComponent,
    children: [
      {
        path: "sign-in",
        loadChildren: () =>
          import("src/app/modules/auth/auth.module").then((m) => m.AuthModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
