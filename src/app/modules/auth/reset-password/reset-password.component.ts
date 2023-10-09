import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { OtpComponent } from "../otp/otp.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
  styleUrls: ["./reset-password.component.scss"],
})
export class ResetPasswordComponent {
  selectedTime: any;
  resetPasswordForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private dialog: MatDialog,
    private dialogRef: MatDialog
  ) {}

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm() {
    this.resetPasswordForm = this._formBuilder.group({
      old_password: ["", [Validators.required]],
      new_password: ["", [Validators.required]],
      confirm_password: ["", [Validators.required]],
    });
  }

  onSubmit() {
    const dialogRef = this.dialog.open(OtpComponent, {
      width: "25%",
      height: "auto",
    });

    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        console.log(data);
      }
    });
  }
}
