import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RecipeService } from '../../appointments/recipe.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs';

interface Report {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']

})
export class DashboardComponent {

  selectedValue: string;
  dataFromDialog: any;
  
  allReports: Report[] = [
    {value: '1', viewValue: 'Client report'},
    {value: '2', viewValue: 'Appointment reports'},
    {value: '3', viewValue: 'Operational report'},
  ];
Recipes=[];
  constructor(private dialog: MatDialog,
              private dialogRef: MatDialog,
              private recipeService:RecipeService,
              private toastr: ToastrService,
              private spinner: NgxSpinnerService,
              private _router:Router){}
    ngOnInit() {
      this.GetRecipe();
    }

    

    GetRecipe(){
      this.spinner.show();
      this.recipeService.GetRecipe({   "page":1,
      "limit":3})
      .pipe(
          finalize(() => {
            this.spinner.hide();
          })
      ).subscribe((res) => {
          if (res.success === true) {
            this.Recipes =res.data;
            // this.dataSource.paginator = this.paginator;
            // this.dataSource.sort = this.sort;
            // this.dataSource.paginator.length = res.data.total_records;
            // this.length = res.data[0].total_records;
            // this.toastr.success('Login Successfully','Success');
          } else { 
            this.toastr.error('Something went wrong','Failed');
             
          }
      });
    }

}
