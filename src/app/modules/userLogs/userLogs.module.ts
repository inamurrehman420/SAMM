import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PrimengModulesImportModule } from "src/app/shared/primeng-modules-import/primeng-modules-import.module";
import { ReactiveFormsModule } from "@angular/forms";
import { NgApexchartsModule } from "ng-apexcharts";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { UserLogsRoutingModule } from "./userLogs-routing.module";
import { UserLogsComponent } from "./userLogs/userLogs.component";
import { MatTableModule } from "@angular/material/table";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
@NgModule({
  declarations: [UserLogsComponent],
  imports: [
    CommonModule,
    UserLogsRoutingModule,
    PrimengModulesImportModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class UserLogsModule {}
