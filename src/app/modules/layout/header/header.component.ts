import { Component, Output, EventEmitter } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { SettingsComponent } from "../settings/settings.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  @Output() toogleSidebaremit = new EventEmitter<string>();
  toggleSidebar() {
    this.toogleSidebaremit.emit();
  }
    UserInfo:any;
    constructor(private dialog: MatDialog, private dialogRef: MatDialog) {
    this.UserInfo = JSON.parse(localStorage.getItem("UserInfo"))
  }

  settings() {
    const dialogRef = this.dialog.open(SettingsComponent, {
      width: "50%",
      height: "auto",
    });

    dialogRef.afterClosed().subscribe((data) => {
      console.log(data);
    });
  }
}
