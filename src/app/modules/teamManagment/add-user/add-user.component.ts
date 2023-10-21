import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { ToastrService } from "ngx-toastr";
import { TeamManagmentService } from "../teamManagment.service";
import { NgxSpinnerService } from "ngx-spinner";
import { finalize } from "rxjs";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.scss"],
})
export class AddUserComponent {
  usersForm: FormGroup;
  private selectedFile: File;
  public avatarURL: any;
  Roles:Role[]=[];

  constructor(
    private _formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddUserComponent>,
    private teamManagmentService:TeamManagmentService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.GetRolesLOV();
    this.userForm();
  }

  userForm() {
    this.usersForm = this._formBuilder.group({
      userId: [0],
      profile_picture: ["", [Validators.required]],
      userName: ["", [Validators.required]],
      email: ["", [Validators.required]],
      phone_number: ["", [Validators.required]],
      password: ["", [Validators.required]],
      roleId: ["", [Validators.required]],
    });
  }

  onFileSelect(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile.name);
  }

  changeAvatar(files) {
    if (files.length === 0) {
      return;
    }

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      console.log("Only images are supported.");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.avatarURL = reader.result;
    };
  }

  onSubmit() {
    this.spinner.show();
    this.teamManagmentService.AddUpdateUser(this.usersForm.value)
    .pipe(
        finalize(() => {
          this.spinner.hide();
        })
    )
    .subscribe((res) => {
        if (res.success === true) {
          this.dialogRef.close(true);
          this.toastr.success("User Added Successfully", "Success");
          // this.toastr.success('Login Successfully','Success');
        } else { 
          this.toastr.error('Something went wrong','Failed');
           
        }
    });    
  }

  onClose() {
    this.dialogRef.close(true);
  }


  GetRolesLOV(){
      this.spinner.show();
      this.teamManagmentService.GetRole({})
      .pipe(
          finalize(() => {
            this.spinner.hide();
          })
      )
      .subscribe((res) => {
        debugger
          if (res.success === true) {
            
            this.Roles =res.data;
            // this.toastr.success('Login Successfully','Success');
          } else { 
            this.toastr.error('Something went wrong with LOV','Failed');
             
          }
      });
    
  }
}

export interface Role {
  
  role_id: number;
  role_name: string;
}