import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { OtpComponent } from "../otp/otp.component";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.scss"],
})
export class ForgotPasswordComponent {
  selectedTime: any;
  forGotPasswordForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.signInF();
  }

  signInF() {
    this.forGotPasswordForm = this._formBuilder.group({
      email: ["", [Validators.required]],
    });
  }

  onSubmit() {
    this.router.navigateByUrl("reset-password");
  }
}
