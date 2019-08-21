import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { TranslateModule } from "@ngx-translate/core";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
//COMPONENTS
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { CustomizerComponent } from "./customizer/customizer.component";
import { NotificationSidebarComponent } from "./notification-sidebar/notification-sidebar.component";

//DIRECTIVES
import { ToggleFullscreenDirective } from "./directives/toggle-fullscreen.directive";
import { SidebarDirective } from "./directives/sidebar.directive";
import { SidebarLinkDirective } from "./directives/sidebarlink.directive";
import { SidebarListDirective } from "./directives/sidebarlist.directive";
import { SidebarAnchorToggleDirective } from "./directives/sidebaranchortoggle.directive";
import { SidebarToggleDirective } from "./directives/sidebartoggle.directive";
import { RoleGuard } from "../pages/services/role.guard";
import { RouteData } from "./sidebar/sidebar-routes.config";
import { FormModule } from "app/forms/forms.module";

@NgModule({
  exports: [
    CommonModule,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CustomizerComponent,
    NotificationSidebarComponent,
    ToggleFullscreenDirective,
    SidebarDirective,

    TranslateModule
  ],
  imports: [
    RouterModule,
    CommonModule,
    NgbModule,
    TranslateModule,
    PerfectScrollbarModule,
    FormsModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CustomizerComponent,
    NotificationSidebarComponent,
    ToggleFullscreenDirective,
    SidebarDirective,
    SidebarLinkDirective,
    SidebarListDirective,
    SidebarAnchorToggleDirective,
    SidebarToggleDirective
  ],
  providers: [RouteData]
})
export class SharedModule {}
