import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { DeleteComponent } from "src/app/shared/delete/delete.component";
import { AddUserComponent } from "../add-user/add-user.component";
import { FormControl } from "@angular/forms";
import { TeamManagmentService } from "../teamManagment.service";
import { finalize } from "rxjs";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

export interface UserData {
  
  user_id: number;
  full_name: string;
  email: string;
  created_by:  string;
  role_id: number;
  role_name:string;
}

@Component({
  selector: "app-teamManagment",
  templateUrl: "./teamManagment.component.html",
  styleUrls: ["./teamManagment.component.scss"],
})
export class TeamManagmentComponent implements OnInit{

  ngOnInit() {
    this.GetUser();
  }

  searchSelect = new FormControl("");
  searchList: string[] = ["Name", "Email", "Phone Number", "Role"];

  onAddUser(): void {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: "70%",
      height: "auto",
    });

    dialogRef.afterClosed().subscribe((data) => { 
      if (data === true) {
        this.GetUser();
      }
    });
  }

  displayedColumns: string[] = [
    "id",
    "name",
    "email",
    "role_name",
    "created_by",
    "action",
  ];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog: MatDialog,
              private dialogRef: MatDialog,
              private teamManagmentService:TeamManagmentService,
              private toastr: ToastrService,
              private spinner: NgxSpinnerService,) {
   
  }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }

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

  GetUser(){
    this.spinner.show();
    this.teamManagmentService.GetUser({})
    .pipe(
        finalize(() => {
          this.spinner.hide();
        })
    )
    .subscribe((res) => {
        console.log(res);
        if (res.success === true) {
          this.dataSource =new MatTableDataSource(res.data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          // this.toastr.success('Login Successfully','Success');
        } else { 
          this.toastr.error('Something went wrong','Failed');
           
        }
    });
  }
}
