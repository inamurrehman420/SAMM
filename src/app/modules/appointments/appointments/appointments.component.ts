import { Component, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { AddAppointmentComponent } from "../add-appointment/add-appointment.component";
import { DeleteComponent } from "src/app/shared/delete/delete.component";
import { Router } from "@angular/router";
import { FormControl } from "@angular/forms";

export interface AppointmentData {
  date: string;
  appointment_time: string;
  client: string;
  user: string;
  task: string;
  notes: string;
  location: string;
}

const ELEMENT_DATA: AppointmentData[] = [
  {
    date: "18-09-2023",
    appointment_time: "03:00 PM - 04:00 PM",
    client: "Inam",
    user: "Usama",
    task: "Maintain Files and show the files to the manager",
    notes: "Adding some important notes for users",
    location: "House 10A Islamabad",
  },
  {
    date: "18-09-2023",
    appointment_time: "03:00 PM - 04:00 PM",
    client: "Inam",
    user: "Usama",
    task: "Maintain Files and show the files to the manager",
    notes: "Adding some important notes for users",
    location: "House 10A Islamabad",
  },
  {
    date: "18-09-2023",
    appointment_time: "03:00 PM - 04:00 PM",
    client: "Inam",
    user: "Usama",
    task: "Maintain Files and show the files to the manager",
    notes: "Adding some important notes for users",
    location: "House 10A Islamabad",
  },
  {
    date: "18-09-2023",
    appointment_time: "03:00 PM - 04:00 PM",
    client: "Inam",
    user: "Usama",
    task: "Maintain Files and show the files to the manager",
    notes: "Adding some important notes for users",
    location: "House 10A Islamabad",
  },

  {
    date: "18-09-2023",
    appointment_time: "03:00 PM - 04:00 PM",
    client: "Inam",
    user: "Usama",
    task: "Maintain Files and show the files to the manager",
    notes: "Adding some important notes for users",
    location: "House 10A Islamabad",
  },

  {
    date: "18-09-2023",
    appointment_time: "03:00 PM - 04:00 PM",
    client: "Inam",
    user: "Usama",
    task: "Maintain Files and show the files to the manager",
    notes: "Adding some important notes for users",
    location: "House 10A Islamabad",
  },

  {
    date: "18-09-2023",
    appointment_time: "03:00 PM - 04:00 PM",
    client: "Inam",
    user: "Usama",
    task: "Maintain Files and show the files to the manager",
    notes: "Adding some important notes for users",
    location: "House 10A Islamabad",
  },
];

@Component({
  selector: "app-appointments",
  templateUrl: "./appointments.component.html",
  styleUrls: ["./appointments.component.scss"],
})
export class AppointmentComponent {
  dataFromDialog: any;

  ngOnInit() {}

  searchSelect = new FormControl("");

  searchList: string[] = [
    "Client",
    "User",
    "Date",
    "Appointment Time",
    "Location",
  ];

  onAddAppointment(): void {
    const dialogRef = this.dialog.open(AddAppointmentComponent, {
      width: "70%",
      height: "auto",
    });

    dialogRef.afterClosed().subscribe((data) => {
      this.dataFromDialog = data.form;
      if (data.clicked === "submit") {
        console.log("Sumbit button clicked");
      }
    });
  }

  displayedColumns: string[] = [
    "client",
    "user",
    "date",
    "appointment_time",
    "task",
    "notes",
    "location",
    "action",
  ];
  dataSource: MatTableDataSource<AppointmentData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog: MatDialog, private dialogRef: MatDialog) {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onDelete() {
    const dialogRef = this.dialog.open(DeleteComponent, {
      width: "24%",
      height: "auto",
    });

    dialogRef.afterClosed().subscribe((data) => {
      console.log(data);
    });
  }
}
