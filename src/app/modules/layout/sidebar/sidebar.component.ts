import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { MenuItem } from "primeng/api";
import {
  ConfirmationService,
  MessageService,
  ConfirmEventType,
} from "primeng/api";
@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
  providers: [ConfirmationService, MessageService],
})
export class SidebarComponent {
  items: MenuItem[];
  constructor(
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    public jwtHelper: JwtHelperService
  ) {}

  tokenInfo: any;
  token: any;
  ngOnInit() {
    this.items = [
      {
        label: "Dashboard",
        icon: "bi bi-speedometer2",
        routerLink: "/dashboard",
      },
      {
        label: "Appointments",
        icon: "bi bi-people",
        routerLink: "/appointments",
      },
      {
        label: "Team Management",
        icon: "bi bi-sliders2-vertical",
        routerLink: "/teamManagment",
      },
      {
        label: "Logs",
        icon: "bi bi-gear-wide",
        routerLink: "/userLogs",
      },
      {
        label: "Client Onboarding",
        icon: "bi bi-sliders2-vertical",
        routerLink: "/clientOnboarding",
      },
      {
        label: "Company Onboarding",
        icon: "bi bi-person-gear",
        routerLink: "/companyOnboarding",
      },

      {
        label: "Logout",
        icon: "bi bi-box-arrow-left",
        routerLink: "/sign-in",
      },
    ];
  }

  onLogout() {
    this.router.navigateByUrl("/sign-in");
  }
}
