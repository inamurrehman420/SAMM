import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { OtpComponent } from "../otp/otp.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  selectedTime: any;
  signInForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private dialog: MatDialog,
    private dialogRef: MatDialog
  ) {}

  ngOnInit(): void {
    this.signInF();
  }

  signInF() {
    this.signInForm = this._formBuilder.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]],
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
