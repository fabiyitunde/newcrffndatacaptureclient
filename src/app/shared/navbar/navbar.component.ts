import {
  Component,
  Output,
  EventEmitter,
  OnDestroy,
  OnInit,
  AfterViewInit
} from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { LayoutService } from "../services/layout.service";
import { Subscription } from "rxjs";
import { ConfigService } from "../services/config.service";
import { Router } from "@angular/router";
//import { userInfo } from "os";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit, AfterViewInit, OnDestroy {
  currentLang = "en";
  toggleClass = "ft-maximize";
  username: string;
  role: string;
  placement = "bottom-right";
  public isCollapsed = true;
  layoutSub: Subscription;
  @Output()
  toggleHideSidebar = new EventEmitter<Object>();

  public config: any = {};

  constructor(
    public translate: TranslateService,
    private router: Router,
    private layoutService: LayoutService,
    private configService: ConfigService
  ) {
    const browserLang: string = translate.getBrowserLang();

    translate.use(browserLang.match(/en|es|pt|de/) ? browserLang : "en");

    this.layoutSub = layoutService.changeEmitted$.subscribe(direction => {
      const dir = direction.direction;
      if (dir === "rtl") {
        this.placement = "bottom-left";
      } else if (dir === "ltr") {
        this.placement = "bottom-right";
      }
    });
  }

  ngOnInit() {
    this.config = this.configService.templateConf;
    const userinfo = JSON.parse(localStorage.getItem("userinfo"));
    const user = userinfo.user;
    const username = user.name;
    const role = user.usertype;

    this.username = username;
    if (role === 1) {
      this.role = "Administrator";
    } else {
      this.role = "Data Entry";
    }
  }

  ngAfterViewInit() {
    if (this.config.layout.dir) {
      setTimeout(() => {
        const dir = this.config.layout.dir;
        if (dir === "rtl") {
          this.placement = "bottom-left";
        } else if (dir === "ltr") {
          this.placement = "bottom-right";
        }
      }, 0);
    }
  }
  logout() {
    localStorage.clear();
    this.router.navigate([""]);
  }

  ngOnDestroy() {
    if (this.layoutSub) {
      this.layoutSub.unsubscribe();
    }
  }

  ChangeLanguage(language: string) {
    this.translate.use(language);
  }

  ToggleClass() {
    if (this.toggleClass === "ft-maximize") {
      this.toggleClass = "ft-minimize";
    } else {
      this.toggleClass = "ft-maximize";
    }
  }

  toggleNotificationSidebar() {
    this.layoutService.emitNotiSidebarChange(true);
  }

  toggleSidebar() {
    const appSidebar = document.getElementsByClassName("app-sidebar")[0];
    if (appSidebar.classList.contains("hide-sidebar")) {
      this.toggleHideSidebar.emit(false);
    } else {
      this.toggleHideSidebar.emit(true);
    }
  }
}
