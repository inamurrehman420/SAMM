import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-add-appointment",
  templateUrl: "./add-appointment.component.html",
  styleUrls: ["./add-appointment.component.scss"],
})
export class AddAppointmentComponent implements OnInit {
  selectedTime: any;
  addAppointmentForm: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddAppointmentComponent>,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.appointmentForm();
  }

  appointmentForm() {
    this.addAppointmentForm = this._formBuilder.group({
      start_date: ["", [Validators.required]],
      location: ["", [Validators.required]],
      start_time: ["", [Validators.required]],
      end_time: ["", [Validators.required]],
      client: ["", [Validators.required]],
      user: ["", [Validators.required]],
      todoTask: ["", [Validators.required]],
      check: ["", [Validators.required]],
    });
  }

  required: boolean = !1;
  maskConfig = {
    mask: [
      new RegExp("([0-9]|0[0-9]|1[0-9]|2[0-3])"),
      new RegExp("[0-1]?[0-9]|2[0-3]"),
      ":",
      new RegExp("[0-5]"),
      new RegExp("[0-9]"),
    ],

    showMask: false,
    guide: true,
    placeholderChar: "-",
  };

  timeMaskOptions = {
    mask: [/\d/, /\d/, ":", /\d/, /\d/],
    placeholder: "",
    pattern: /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
    keepCharPositions: true,
    guide: false,
  };

  @ViewChild("timepicker") timepicker: any;

  openFromIcon(timepicker1: { open: () => void }) {
    if (!this.addAppointmentForm.get("start_time").disabled) {
      timepicker1.open();
    }
  }

  openFromIcon1(timepicker: { open: () => void }) {
    if (!this.addAppointmentForm.get("end_time").disabled) {
      timepicker.open();
    }
  }

  onClear($event: Event) {
    this.addAppointmentForm.get("start_time").setValue(null);
    this.addAppointmentForm.get("end_time").setValue(null);
  }

  onSubmit() {
    this.dialogRef.close(true);
    this.toastr.success("Appointment Submit Successfully", "Success");
  }

  onClose() {
    this.dialogRef.close(true);
  }
}
