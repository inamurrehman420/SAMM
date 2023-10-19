import { LOCALE_ID, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PrimengModulesImportModule } from "src/app/shared/primeng-modules-import/primeng-modules-import.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgApexchartsModule } from "ng-apexcharts";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { TeamManagmentRoutingModule } from "./teamManagment-routing.module";
import { TeamManagmentComponent } from "./teamManagment/teamManagment.component";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatTooltipModule } from "@angular/material/tooltip";
import { NgxMatTimepickerModule } from "ngx-mat-timepicker";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";
import { SharedModule } from "primeng/api";
import { AddUserComponent } from './add-user/add-user.component';
import { NgxSpinnerModule } from "ngx-spinner";
const lang = "en-US";
@NgModule({
  declarations: [TeamManagmentComponent, AddUserComponent],
  imports: [
    CommonModule,
    TeamManagmentRoutingModule,
    PrimengModulesImportModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatChipsModule,
    MatTooltipModule,
    SharedModule,
    NgxMatTimepickerModule.setLocale(lang),
    NgxMaterialTimepickerModule,
    NgxSpinnerModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: lang }],
})
export class TeamManagmentModule {}
