import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { OtpComponent } from "../otp/otp.component";
import { MatDialog } from "@angular/material/dialog";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "../auth.service";
import { finalize } from "rxjs";
import { __assign } from "tslib";
import { NgxSpinnerService } from "ngx-spinner";
import { responseData } from "src/app/models/response/response";

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
    private dialogRef: MatDialog,
    private toastr: ToastrService,
    private authService:AuthService,
    private spinner: NgxSpinnerService,
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
    this.spinner.show();
    this.authService.login(this.signInForm.value)
    .pipe(
        finalize(() => {
           this.spinner.hide();
        })
    )
    .subscribe((res:responseData<any>) => {
        console.log(res);
        if (res.success === true) {
          localStorage.setItem("UserInfo",JSON.stringify(res.data))
          this.toastr.success('Login Successfully','Success');
          this.router.navigateByUrl('/dashboard');
   
        } else { 
          this.toastr.error(res.message,'Failed');
           
        }
    });
   
    // const dialogRef = this.dialog.open(OtpComponent, {
    //   width: "25%",
    //   height: "auto",
    // });

    // dialogRef.afterClosed().subscribe((data) => {
    //   if (data) {
    //     console.log(data);
    //   }
    // });
  }
}
