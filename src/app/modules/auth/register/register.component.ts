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
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  
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
    
  }


}
