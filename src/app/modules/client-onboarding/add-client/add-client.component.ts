import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-add-client",
  templateUrl: "./add-client.component.html",
  styleUrls: ["./add-client.component.scss"],
})
export class AddClientComponent {
  usersForm: FormGroup;
  personalDetailForm: FormGroup;
  private selectedFile: File;
  public avatarURL: any;
  isLinear = false;

  constructor(
    private _formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddClientComponent>,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.userForm();
    this.personalForm();
  }

  userForm() {
    this.usersForm = this._formBuilder.group({
      profile_picture: ["", [Validators.required]],
      name: ["", [Validators.required]],
      email: ["", [Validators.required]],
      phone_number: ["", [Validators.required]],
      password: ["", [Validators.required]],
      start_date: ["", [Validators.required]],
      end_date: ["", [Validators.required]],
    });
  }

  personalForm() {
    this.personalDetailForm = this._formBuilder.group({
      clientName: ["", [Validators.required]],
      clientEmail: ["", [Validators.required]],
      contactNumber: ["", [Validators.required]],
      nhsNumber: ["", [Validators.required]],
      address: ["", [Validators.required]],
      dob: ["", [Validators.required]],
      joiningDate: ["", [Validators.required]],
      name: ["", [Validators.required]],
      phoneNumber: ["", [Validators.required]],
      email: ["", [Validators.required]],
      relationship: ["", [Validators.required]],
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
    this.dialogRef.close(true);
    this.toastr.success("User Added Successfully", "Success");
  }

  onClose() {
    this.dialogRef.close(true);
  }
}
