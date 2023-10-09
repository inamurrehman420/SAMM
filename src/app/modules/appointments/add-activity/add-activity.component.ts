import { Component, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-add-activity",
  templateUrl: "./add-activity.component.html",
  styleUrls: ["./add-activity.component.scss"],
})
export class AddActivityComponent {
  addActivityForm: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddActivityComponent>,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.appointmentForm();
  }

  appointmentForm() {
    this.addActivityForm = this._formBuilder.group({
      activity_time: ["", [Validators.required]],
      nameOfActivity: ["", [Validators.required]],
      details: ["", [Validators.required]],
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
    if (!this.addActivityForm.get("activity_time").disabled) {
      timepicker1.open();
    }
  }

  onClear($event: Event) {
    this.addActivityForm.get("activity_time").setValue(null);
  }

  onSubmit() {
    this.dialogRef.close(true);
    this.toastr.success("Activity Added Successfully", "Success");
  }

  onClose() {
    this.dialogRef.close(true);
  }
}
