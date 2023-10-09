import { Component, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { ToastrService } from "ngx-toastr";
import { AddAppointmentComponent } from "../../appointments/add-appointment/add-appointment.component";

@Component({
  selector: "app-add-onboard-client",
  templateUrl: "./add-onboard-client.component.html",
  styleUrls: ["./add-onboard-client.component.scss"],
})
export class AddOnboardClientComponent {
  selectedTime: any;
  onBoardForm: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddAppointmentComponent>,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.addOnboardFormForm();
  }

  addOnboardFormForm() {
    this.onBoardForm = this._formBuilder.group({
      companyName: ["", [Validators.required]],
      registrationNumber: ["", [Validators.required]],
      postalAdress: ["", [Validators.required]],
      start_date: ["", [Validators.required]],
      end_date: ["", [Validators.required]],
      representativeName: ["", [Validators.required]],
      representativeEmail: ["", [Validators.required]],
      representativeNumber: ["", [Validators.required]],
    });
  }

  onSubmit() {
    this.dialogRef.close(true);
    this.toastr.success("Client Onboard Successfully", "Success");
  }

  onClose() {
    this.dialogRef.close(true);
  }
}
