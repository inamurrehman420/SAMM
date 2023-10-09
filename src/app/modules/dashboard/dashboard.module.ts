import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrimengModulesImportModule } from 'src/app/shared/primeng-modules-import/primeng-modules-import.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { LineChartComponent } from './line-chart/line-chart.component';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'; 
import { SharedModule } from 'primeng/api';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {ToastrModule} from "ngx-toastr";
import { BarChartComponent } from './bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    DashboardComponent,
    LineChartComponent,
    BarChartComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PrimengModulesImportModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    SharedModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 3000, // 15 seconds
      progressBar: true,
  }),
  ]
})
export class DashboardModule { }
