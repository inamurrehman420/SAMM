import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimengModulesImportModule } from 'src/app/shared/primeng-modules-import/primeng-modules-import.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { OtpComponent } from './otp/otp.component';
import { NgxOtpInputModule } from 'ngx-otp-input';
import { MatDialogModule } from '@angular/material/dialog';
import {ToastrModule} from "ngx-toastr";
import { SharedModule } from 'primeng/api';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { GoogleSigninModule } from '../google-signin-module';
import { CallbackComponent } from './callback/callback.component';

@NgModule({
  declarations: [
    LoginComponent,
    OtpComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    CallbackComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    GoogleSigninModule,
    ReactiveFormsModule,
    PrimengModulesImportModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule,
    NgxOtpInputModule,
    SharedModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 3000, // 15 seconds
      progressBar: true,
  }),
  ]
})
export class AuthModule { }
