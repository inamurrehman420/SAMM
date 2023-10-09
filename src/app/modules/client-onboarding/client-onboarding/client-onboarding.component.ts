import { Component, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { DeleteComponent } from "src/app/shared/delete/delete.component";
import { AddClientComponent } from "../add-client/add-client.component";
import { FormControl } from "@angular/forms";
import { animate, state, style, transition, trigger } from "@angular/animations";
export interface AppointmentData {
  imageUrl: string;
  name: string;
  email: string;
  phoneNumber: string;
  start_date: string;
  end_date: string;
  role: string;
}
export interface Client {
  companyName: string;
  registrationNumber: string;
  postalAddress: string;
  startDate: string;
  endDate: string;
  representativeName: string;
  representativeNumber: string;
}

export interface Representative {
  name: string;
  email: string;
  phoneNumber: string;
  relationship: string;
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
    role: "Emergency Contact",
  },

  {
    imageUrl: "https://github.com/SiddAjmera.png",
    start_date: "18-09-2023",
    end_date: "20-09-2023",
    name: "Inam",
    email: "Usama",
    phoneNumber: "03001236575",
    role: "Emergency Contact",
  },
  {
    imageUrl: "https://github.com/SiddAjmera.png",
    start_date: "18-09-2023",
    end_date: "20-09-2023",
    name: "Inam",
    email: "Usama",
    phoneNumber: "03001236575",
    role: "Emergency Contact",
  },
  {
    imageUrl: "https://github.com/SiddAjmera.png",
    start_date: "18-09-2023",
    end_date: "20-09-2023",
    name: "Inam",
    email: "Usama",
    phoneNumber: "03001236575",
    role: "Emergency Contact",
  },
  {
    imageUrl: "https://github.com/SiddAjmera.png",
    start_date: "18-09-2023",
    end_date: "20-09-2023",
    name: "Inam",
    email: "Usama",
    phoneNumber: "03001236575",
    role: "Emergency Contact",
  },
  {
    imageUrl: "https://github.com/SiddAjmera.png",
    start_date: "18-09-2023",
    end_date: "20-09-2023",
    name: "Inam",
    email: "Usama",
    phoneNumber: "03001236575",
    role: "Emergency Contact",
  },
  {
    imageUrl: "https://github.com/SiddAjmera.png",
    start_date: "18-09-2023",
    end_date: "20-09-2023",
    name: "Inam",
    email: "Usama",
    phoneNumber: "03001236575",
    role: "Emergency Contact",
  },
  {
    imageUrl: "https://github.com/SiddAjmera.png",
    start_date: "18-09-2023",
    end_date: "20-09-2023",
    name: "Inam",
    email: "Usama",
    phoneNumber: "03001236575",
    role: "Emergency Contact",
  },
  {
    imageUrl: "https://github.com/SiddAjmera.png",
    start_date: "18-09-2023",
    end_date: "20-09-2023",
    name: "Inam",
    email: "Usama",
    phoneNumber: "03001236575",
    role: "Emergency Contact",
  },
  {
    imageUrl: "https://github.com/SiddAjmera.png",
    start_date: "18-09-2023",
    end_date: "20-09-2023",
    name: "Inam",
    email: "Usama",
    phoneNumber: "03001236575",
    role: "Emergency Contact",
  },
  {
    imageUrl: "https://github.com/SiddAjmera.png",
    start_date: "18-09-2023",
    end_date: "20-09-2023",
    name: "Inam",
    email: "Usama",
    phoneNumber: "03001236575",
    role: "Emergency Contact",
  },
];
export interface Client {
  companyName: string;
  registrationNumber: string;
  postalAddress: string;
  startDate: string;
  endDate: string;
  representativeName: string;
  representativeNumber: string;
}

export interface Representative {
  name: string;
  email: string;
  phoneNumber: string;
  role: string;
}
@Component({
  selector: "app-client-onboarding",
  templateUrl: "./client-onboarding.component.html",
  styleUrls: ["./client-onboarding.component.scss"],
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0" })),
      state("expanded", style({ height: "*", minHeight: "*" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")
      ),
    ]),
  ],
})
export class ClientOnboardingComponent {
  dataFromDialog: any;
  clients: Client[] = [
    {
      companyName: "AXA",
      registrationNumber: "03012365478",
      postalAddress: "House no 10, Islamabad",
      startDate: "10-10-2023",
      endDate: "20-10-2023",
      representativeName: "usama",
      representativeNumber: "03012365498",
    },
  ];

  representative: Representative[] = [
    {
      name: "Usama",
      email: "usama@gmail.com",
      phoneNumber: "03001236547",
      relationship: "Son",
      role: "Emergency Contact",
    },
  ];
  ngOnInit() {}

  searchSelect = new FormControl("");

  searchList: string[] = [
    "Name",
    "Email",
    "Phone Number",
    "Start Date",
    "End Date",
  ];

  onAddUser(): void {
    const dialogRef = this.dialog.open(AddClientComponent, {
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
    // "role",
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

  onDelete(event: MouseEvent) {
    event.stopPropagation();
    const dialogRef = this.dialog.open(DeleteComponent, {
      width: "24%",
      height: "auto",
    });

    dialogRef.afterClosed().subscribe((data) => {
      console.log(data);
    });
  }
  onAddBoarding(event: MouseEvent) {
    event.stopPropagation();
    const dialogRef = this.dialog.open(AddClientComponent, {
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
}
