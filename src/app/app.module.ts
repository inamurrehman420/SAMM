import { LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpModule } from "./shared/http/http.module";
import { HttpClientModule } from "@angular/common/http";
import { JwtModule } from "@auth0/angular-jwt";
import { AuthGuard } from "./shared/guards/auth.guard";
import { ReactiveFormsModule } from "@angular/forms";
import { AdminAccessGuard } from "./shared/guards/admin-access.guard";
import { NgApexchartsModule } from "ng-apexcharts";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { RouterModule } from "@angular/router";
import { NgxOtpInputModule } from "ngx-otp-input";
import { ToastrModule } from "ngx-toastr";
import { NgxMatTimepickerModule } from "ngx-mat-timepicker";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";
import { MatMenuModule } from "@angular/material/menu";
import { SharedModule } from "./shared/shared.module";
const lang = "en-US";
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    MatSelectModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatMenuModule,
    RouterModule,
    SharedModule,
    NgxOtpInputModule,
    HttpClientModule,
    NgxMatTimepickerModule.setLocale(lang),
    NgxMaterialTimepickerModule,
    HttpModule.forRoot(),
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 3000, // 15 seconds
      progressBar: true,
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      },
    }),
  ],
  providers: [
    AuthGuard,
    AdminAccessGuard,
    { provide: LOCALE_ID, useValue: lang },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
export function tokenGetter() {
  return localStorage.getItem("access_token");
}
