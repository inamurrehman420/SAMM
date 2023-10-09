import { Component, ViewChild } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

export interface AppointmentData {
  imageUrl: string;
  name: string;
  email: string;
  phoneNumber: string;
  activity: string;
  date: string;
  role: string;
}

const ELEMENT_DATA: AppointmentData[] = [
  {
    imageUrl: "https://github.com/SiddAjmera.png",
    activity: "Activity Date",
    date: "20-09-2023",
    name: "Inam",
    email: "usama@gmail.com",
    phoneNumber: "03001236575",
    role: "manager",
  },

  {
    imageUrl: "https://github.com/SiddAjmera.png",
    activity: "Activity Date",
    date: "20-09-2023",
    name: "Ali",
    email: "ali@gmail.com",
    phoneNumber: "03001236575",
    role: "manager",
  },
  {
    imageUrl: "https://github.com/SiddAjmera.png",
    activity: "Activity Date",
    date: "20-09-2023",
    name: "Faheem",
    email: "faheem@gmail.com",
    phoneNumber: "03001236575",
    role: "manager",
  },

  {
    imageUrl: "https://github.com/SiddAjmera.png",
    activity: "Activity Date",
    date: "20-09-2023",
    name: "nabeel",
    email: "nabeel@gmail.com",
    phoneNumber: "03001236575",
    role: "manager",
  },

  {
    imageUrl: "https://github.com/SiddAjmera.png",
    activity: "Activity Date",
    date: "20-09-2023",
    name: "amir",
    email: "amir@gmail.com",
    phoneNumber: "03001236575",
    role: "manager",
  },

  {
    imageUrl: "https://github.com/SiddAjmera.png",
    activity: "Activity Date",
    date: "20-09-2023",
    name: "sami",
    email: "sami@gmail.com",
    phoneNumber: "03001236575",
    role: "manager",
  },

  {
    imageUrl: "https://github.com/SiddAjmera.png",
    activity: "Activity Date",
    date: "20-09-2023",
    name: "Omer",
    email: "omer@gmail.com",
    phoneNumber: "03001236575",
    role: "manager",
  },

  {
    imageUrl: "https://github.com/SiddAjmera.png",
    activity: "Activity Date",
    date: "20-09-2023",
    name: "Abdul Rehman",
    email: "abdul@gmail.com",
    phoneNumber: "03001236575",
    role: "manager",
  },

  {
    imageUrl: "https://github.com/SiddAjmera.png",
    activity: "Activity Date",
    date: "20-09-2023",
    name: "Haider",
    email: "haider@gmail.com",
    phoneNumber: "03001236575",
    role: "manager",
  },

  {
    imageUrl: "https://github.com/SiddAjmera.png",
    activity: "Activity Date",
    date: "20-09-2023",
    name: "Tayyab",
    email: "tayyab@gmail.com",
    phoneNumber: "03001236575",
    role: "manager",
  },

  {
    imageUrl: "https://github.com/SiddAjmera.png",
    activity: "Activity Date",
    date: "20-09-2023",
    name: "Mustanser",
    email: "mustanser@gmail.com",
    phoneNumber: "03001236575",
    role: "manager",
  },

  {
    imageUrl: "https://github.com/SiddAjmera.png",
    activity: "Activity Date",
    date: "20-09-2023",
    name: "Shehzad",
    email: "shehzad@gmail.com",
    phoneNumber: "03001236575",
    role: "manager",
  },
];
@Component({
  selector: "app-userLogs",
  templateUrl: "./userLogs.component.html",
  styleUrls: ["./userLogs.component.scss"],
})
export class UserLogsComponent {
  dataFromDialog: any;

  ngOnInit() {}

  searchSelect = new FormControl("");

  searchList: string[] = [
    "Name",
    "Email",
    "Phone Number",
    "Activity",
    "Date",
    "Role",
  ];

  displayedColumns: string[] = [
    "name",
    "email",
    "phoneNumber",
    "activity",
    "date",
    "role",
  ];
  dataSource: MatTableDataSource<AppointmentData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
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

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
}
