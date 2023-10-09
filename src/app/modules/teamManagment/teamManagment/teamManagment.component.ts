import { Component, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { DeleteComponent } from "src/app/shared/delete/delete.component";
import { AddUserComponent } from "../add-user/add-user.component";
import { FormControl } from "@angular/forms";

export interface AppointmentData {
  imageUrl: string;
  name: string;
  email: string;
  phoneNumber: string;
  start_date: string;
  end_date: string;
  role: string;
}

const ELEMENT_DATA: AppointmentData[] = [
  {
    imageUrl: "https://github.com/SiddAjmera.png",
    start_date: "18-09-2023",
    end_date: "20-09-2023",
    name: "Inam",
    email: "Usama",
    phoneNumber: "03001236575",
    role: "manager",
  },

  {
    imageUrl: "https://github.com/SiddAjmera.png",
    start_date: "18-09-2023",
    end_date: "20-09-2023",
    name: "Inam",
    email: "Usama",
    phoneNumber: "03001236575",
    role: "manager",
  },
  {
    imageUrl: "https://github.com/SiddAjmera.png",
    start_date: "18-09-2023",
    end_date: "20-09-2023",
    name: "Inam",
    email: "Usama",
    phoneNumber: "03001236575",
    role: "manager",
  },
  {
    imageUrl: "https://github.com/SiddAjmera.png",
    start_date: "18-09-2023",
    end_date: "20-09-2023",
    name: "Inam",
    email: "Usama",
    phoneNumber: "03001236575",
    role: "manager",
  },
  {
    imageUrl: "https://github.com/SiddAjmera.png",
    start_date: "18-09-2023",
    end_date: "20-09-2023",
    name: "Inam",
    email: "Usama",
    phoneNumber: "03001236575",
    role: "manager",
  },
  {
    imageUrl: "https://github.com/SiddAjmera.png",
    start_date: "18-09-2023",
    end_date: "20-09-2023",
    name: "Inam",
    email: "Usama",
    phoneNumber: "03001236575",
    role: "manager",
  },
  {
    imageUrl: "https://github.com/SiddAjmera.png",
    start_date: "18-09-2023",
    end_date: "20-09-2023",
    name: "Inam",
    email: "Usama",
    phoneNumber: "03001236575",
    role: "manager",
  },
  {
    imageUrl: "https://github.com/SiddAjmera.png",
    start_date: "18-09-2023",
    end_date: "20-09-2023",
    name: "Inam",
    email: "Usama",
    phoneNumber: "03001236575",
    role: "manager",
  },
  {
    imageUrl: "https://github.com/SiddAjmera.png",
    start_date: "18-09-2023",
    end_date: "20-09-2023",
    name: "Inam",
    email: "Usama",
    phoneNumber: "03001236575",
    role: "manager",
  },
  {
    imageUrl: "https://github.com/SiddAjmera.png",
    start_date: "18-09-2023",
    end_date: "20-09-2023",
    name: "Inam",
    email: "Usama",
    phoneNumber: "03001236575",
    role: "manager",
  },
  {
    imageUrl: "https://github.com/SiddAjmera.png",
    start_date: "18-09-2023",
    end_date: "20-09-2023",
    name: "Inam",
    email: "Usama",
    phoneNumber: "03001236575",
    role: "manager",
  },
];

@Component({
  selector: "app-teamManagment",
  templateUrl: "./teamManagment.component.html",
  styleUrls: ["./teamManagment.component.scss"],
})
export class TeamManagmentComponent {
  dataFromDialog: any;

  ngOnInit() {}

  searchSelect = new FormControl("");

  searchList: string[] = ["Name", "Email", "Phone Number", "Role"];

  onAddUser(): void {
    const dialogRef = this.dialog.open(AddUserComponent, {
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
    "name",
    "email",
    "phoneNumber",
    "start_date",
    "end_date",
    "role",
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
