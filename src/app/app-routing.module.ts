import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./modules/auth/login/login.component";
import { LayoutComponent } from "./modules/layout/layout/layout.component";
import { ForgotPasswordComponent } from "./modules/auth/forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "./modules/auth/reset-password/reset-password.component";
import { SettingsComponent } from "./modules/layout/settings/settings.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/dashboard" },

  // Redirect signed in user to the '/dashboards/project'
  //
  // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
  // path. Below is another redirection for that path to redirect the user to the desired
  // location. This is a small convenience to keep all main routes together here on this file.
  { path: "signed-in-redirect", pathMatch: "full", redirectTo: "/dashboard" },

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

  {
    path: "",
    component: ForgotPasswordComponent,
    children: [
      {
        path: "forgot-password",
        loadChildren: () =>
          import("src/app/modules/auth/auth.module").then((m) => m.AuthModule),
      },
    ],
  },

  {
    path: "",
    component: ResetPasswordComponent,
    children: [
      {
        path: "reset-password",
        loadChildren: () =>
          import("src/app/modules/auth/auth.module").then((m) => m.AuthModule),
      },
    ],
  },

  {
    path: "layout",
    loadChildren: () =>
      import("src/app/modules/layout/layout.module").then(
        (m) => m.LayoutModule
      ),
  },

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
        path: "recipe",
        loadChildren: () =>
          import("src/app/modules/appointments/recipe.module").then(
            (m) => m.RecipeModule
          ),
      },
      {
        path: "userLogs",
        loadChildren: () =>
          import("src/app/modules/userLogs/userLogs.module").then(
            (m) => m.UserLogsModule
          ),
      },
      {
        path: "teamManagment",
        loadChildren: () =>
          import("src/app/modules/teamManagment/teamManagment.module").then(
            (m) => m.TeamManagmentModule
          ),
      },
     { path: "**", redirectTo: "404-not-found" },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
