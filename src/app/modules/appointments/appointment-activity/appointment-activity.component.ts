import { Component, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { DeleteComponent } from "src/app/shared/delete/delete.component";
import { AddAppointmentComponent } from "../add-appointment/add-appointment.component";
import { AddActivityComponent } from "../add-activity/add-activity.component";
import { Router } from "@angular/router";
import { FormControl } from "@angular/forms";

export interface AppointmentData {
  nameOfActivity: string;
  timeOfActivity: string;
  detailOfActivity: string;
  addedByPerson: string;
  addedAt: string;
}

const ELEMENT_DATA: AppointmentData[] = [
  {
    nameOfActivity: "Managment",
    detailOfActivity:
      "This activity is assigned to the manager to divide and maintain the task between the staff",
    timeOfActivity: "03:00 PM",
    addedByPerson: "usama",
    addedAt: "03:00 PM",
  },
];

@Component({
  selector: "app-appointment-activity",
  templateUrl: "./appointment-activity.component.html",
  styleUrls: ["./appointment-activity.component.scss"],
})
export class AppointmentActivityComponent {
  dataFromDialog: any;

  ngOnInit() {}

  searchSelect = new FormControl("");

  searchList: string[] = [
    "Name of Activity",
    "Detail of Time",
    "Time of Activity",
    "Added By Person",
  ];

  onAddActivity(): void {
    const dialogRef = this.dialog.open(AddActivityComponent, {
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
    "nameOfActivity",
    "detailOfActivity",
    "timeOfActivity",
    "addedByPerson",
    "addedAt",
    "action",
  ];
  dataSource: MatTableDataSource<AppointmentData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialog,
    private router: Router
  ) {
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

  onDelete() {}

  onBack() {
    this.router.navigateByUrl("appointments");
  }
}
