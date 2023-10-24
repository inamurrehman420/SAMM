import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { OtpComponent } from "../otp/otp.component";
import { MatDialog } from "@angular/material/dialog";
import { AuthService } from "../auth.service";
import { ToastrService } from "ngx-toastr";
import { responseData } from "src/app/models/response/response";
import { NgxSpinnerService } from "ngx-spinner";
import { finalize } from "rxjs";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
  styleUrls: ["./reset-password.component.scss"],
})
export class ResetPasswordComponent {
  selectedTime: any;
  resetPasswordForm: FormGroup;
  token:any;

  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private dialog: MatDialog,
    private dialogRef: MatDialog,
    private _authService: AuthService,
    private toaster:ToastrService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.resetForm();
    this.route.queryParams
      .subscribe(params => {
        this.token = params;
      }
    )
    
  }

  resetForm() {
    this.resetPasswordForm = this._formBuilder.group({
      newPassword: ["", [Validators.required]],
      confirmPassword: ["", [Validators.required]],
    });
  }

  onSubmit() {
    this.spinner.show()
    const body = {
      ...this.token,
      ...this.resetPasswordForm.value
    }
    this._authService
    .ResetPassword(body)
    .pipe(
      finalize(() => {
        this.spinner.hide();
      })
    )
    .subscribe((resp:responseData<any>)=>{
      if(resp.success){
        this.toaster.success(resp.message,'Success');
        this.router.navigate(['/sign-in'])
      }
      else{
          this.toaster.error(resp.message,'Error');
      }
    })
  }
}
