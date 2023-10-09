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
import { CompanyOnboardingRoutingModule } from "./companyOnboarding-routing.module";
import { CompanyOnboardingComponent } from "./companyOnboarding/companyOnboarding.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTableModule } from "@angular/material/table";
import { CdkAccordionModule } from "@angular/cdk/accordion";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatTooltipModule } from "@angular/material/tooltip";
import { SharedModule } from "primeng/api";
import { AddOnboardClientComponent } from "./add-onboard-client/add-onboard-client.component";
import { TreeModule } from "primeng/tree";
import { TreeTableModule } from "primeng/treetable";
import { TreeSelectModule } from "primeng/treeselect";
import { DropdownModule } from "primeng/dropdown";
import { ButtonModule } from "primeng/button";
import { SpeedDialModule } from "primeng/speeddial";
import { MenuModule } from "primeng/menu";
import { InputTextareaModule } from "primeng/inputtextarea";
import { ScrollPanelModule } from "primeng/scrollpanel";
import { ImageModule } from "primeng/image";
import { SelectButtonModule } from "primeng/selectbutton";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { PanelMenuModule } from "primeng/panelmenu";
import { MegaMenuModule } from "primeng/megamenu";
import { GalleriaModule } from "primeng/galleria";
import { TabMenuModule } from "primeng/tabmenu";
import { TimelineModule } from "primeng/timeline";
import { PaginatorModule } from "primeng/paginator";
import { TagModule } from "primeng/tag";
import { ChartModule } from "primeng/chart";
import { InputSwitchModule } from "primeng/inputswitch";
import { ScrollerModule } from "primeng/scroller";
import { ToastModule } from "primeng/toast";
import { InplaceModule } from "primeng/inplace";
import { SidebarModule } from "primeng/sidebar";
import { PanelModule } from "primeng/panel";
import { PickListModule } from "primeng/picklist";
import { ListboxModule } from "primeng/listbox";
import { TableModule } from "primeng/table";
import { ChipsModule } from "primeng/chips";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { SliderModule } from "primeng/slider";
import { AccordionModule } from "primeng/accordion";
import { DockModule } from "primeng/dock";
import { ChipModule } from "primeng/chip";
import { PasswordModule } from "primeng/password";
import { TerminalModule } from "primeng/terminal";
import { MultiSelectModule } from "primeng/multiselect";
import { DividerModule } from "primeng/divider";
import { MessagesModule } from "primeng/messages";
import { RadioButtonModule } from "primeng/radiobutton";
import { DynamicDialogModule } from "primeng/dynamicdialog";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { SpinnerModule } from "primeng/spinner";
import { ToolbarModule } from "primeng/toolbar";
import { KnobModule } from "primeng/knob";
import { SkeletonModule } from "primeng/skeleton";
import { AutoCompleteModule } from "primeng/autocomplete";
import { FileUploadModule } from "primeng/fileupload";
import { TieredMenuModule } from "primeng/tieredmenu";
import { ToggleButtonModule } from "primeng/togglebutton";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { ContextMenuModule } from "primeng/contextmenu";
import { SlideMenuModule } from "primeng/slidemenu";
import { MenubarModule } from "primeng/menubar";
import { ProgressBarModule } from "primeng/progressbar";
import { ColorPickerModule } from "primeng/colorpicker";
import { CalendarModule } from "primeng/calendar";
import { DataViewModule } from "primeng/dataview";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { TooltipModule } from "primeng/tooltip";
import { CheckboxModule } from "primeng/checkbox";
import { StepsModule } from "primeng/steps";
import { CarouselModule } from "primeng/carousel";
import { SplitterModule } from "primeng/splitter";
import { TabViewModule } from "primeng/tabview";
import { VirtualScrollerModule } from "primeng/virtualscroller";
import { OrderListModule } from "primeng/orderlist";
import { FieldsetModule } from "primeng/fieldset";
import { InputTextModule } from "primeng/inputtext";
import { BadgeModule } from "primeng/badge";
import { BlockUIModule } from "primeng/blockui";
import { RatingModule } from "primeng/rating";
import { ScrollTopModule } from "primeng/scrolltop";
import { MessageModule } from "primeng/message";
import { OrganizationChartModule } from "primeng/organizationchart";
import { SplitButtonModule } from "primeng/splitbutton";
import { DialogModule } from "primeng/dialog";
import { DragDropModule } from "primeng/dragdrop";
import { PipesModule } from "src/app/shared/pipes";

@NgModule({
  declarations: [
    CompanyOnboardingComponent,
    AddOnboardClientComponent
],
  imports: [
    CommonModule,
    PipesModule,
    CompanyOnboardingRoutingModule,
    PrimengModulesImportModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatTableModule,
    CdkAccordionModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatChipsModule,
    MatTooltipModule,
    TreeModule,
    TreeSelectModule,
    TreeTableModule,
    AccordionModule,
    AutoCompleteModule,
    BadgeModule,
    BreadcrumbModule,
    BlockUIModule,
    ButtonModule,
    CalendarModule,
    CarouselModule,
    CascadeSelectModule,
    ChartModule,
    CheckboxModule,
    ChipsModule,
    ChipModule,
    ColorPickerModule,
    ConfirmDialogModule,
    ContextMenuModule,
    VirtualScrollerModule,
    DataViewModule,
    DialogModule,
    DividerModule,
    DockModule,
    DragDropModule,
    DropdownModule,
    DynamicDialogModule,
    FieldsetModule,
    FileUploadModule,
    GalleriaModule,
    InplaceModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    ImageModule,
    KnobModule,
    ListboxModule,
    MegaMenuModule,
    MenuModule,
    MenubarModule,
    MessageModule,
    MessagesModule,
    MultiSelectModule,
    OrganizationChartModule,
    OrderListModule,
    OverlayPanelModule,
    PaginatorModule,
    PanelModule,
    PanelMenuModule,
    PasswordModule,
    PickListModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    RadioButtonModule,
    RatingModule,
    SelectButtonModule,
    SidebarModule,
    ScrollerModule,
    ScrollPanelModule,
    ScrollTopModule,
    SkeletonModule,
    SlideMenuModule,
    SliderModule,
    SpeedDialModule,
    SpinnerModule,
    SplitterModule,
    SplitButtonModule,
    StepsModule,
    TableModule,
    TabMenuModule,
    TabViewModule,
    TagModule,
    TerminalModule,
    TieredMenuModule,
    TimelineModule,
    ToastModule,
    ToggleButtonModule,
    ToolbarModule,
    TooltipModule,
    SharedModule,
  ],
})
export class CompanyOnboardingModule {}
