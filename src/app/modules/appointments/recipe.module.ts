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
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatTooltipModule } from "@angular/material/tooltip";
import { SharedModule } from "primeng/api";
import { NgxMatTimepickerModule } from "ngx-mat-timepicker";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";
import { PipesModule } from "src/app/shared/pipes";
import { AddRecipeComponent } from "./add-recipe/add-recipe.component";
import { RecipeComponent } from "./recipe-list/recipe.component";
import { RecipeModuleRoutingModule } from "./recipe-routing.module";

const lang = "en-US";
@NgModule({
  declarations: [
    AddRecipeComponent,
    RecipeComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    RecipeModuleRoutingModule,
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
  ],
  providers: [{ provide: LOCALE_ID, useValue: lang }],
})
export class RecipeModule {}
