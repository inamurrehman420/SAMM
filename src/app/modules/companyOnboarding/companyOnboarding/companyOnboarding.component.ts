import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DeleteComponent } from "src/app/shared/delete/delete.component";
import { AddOnboardClientComponent } from "../add-onboard-client/add-onboard-client.component";
import { FormControl } from "@angular/forms";

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
  selector: "app-companyOnboarding",
  templateUrl: "./companyOnboarding.component.html",
  styleUrls: ["./companyOnboarding.component.scss"],
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
export class CompanyOnboardingComponent {
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
      role: "Manager",
    },
  ];

  constructor(private dialog: MatDialog, private dialogRef: MatDialog) {}

  ngOnInit() {}

  searchSelect = new FormControl("");

  searchList: string[] = [
    "Company Name",
    "Registration Number",
    "Postal Address",
    "Start Date",
    "End Date",
    "Representative Name",
    "Representative Number",
  ];

  ngAfterViewInit() {}

  applyFilter(event: Event) {}

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
    const dialogRef = this.dialog.open(AddOnboardClientComponent, {
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
