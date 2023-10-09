import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"],
})
export class SettingsComponent {
  private selectedFile: File;
  public avatarURL: any;

  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private dialogRef: MatDialogRef<SettingsComponent>,
    private toastr: ToastrService
  ) {}

  selectedTime: any;
  profileDetailsForm: FormGroup;

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm() {
    this.profileDetailsForm = this._formBuilder.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required]],
      phone_number: ["", [Validators.required]],
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
    this.toastr.success("Settings Updated Successfully", "Success");
    this.dialogRef.close(true);
  }

  onSendResetLink() {
    this.toastr.success(
      "Reset Password Link send to your valid email",
      "Success"
    );
    this.dialogRef.close(true);
  }

  onClose() {
    this.dialogRef.close(true);
  }
}
