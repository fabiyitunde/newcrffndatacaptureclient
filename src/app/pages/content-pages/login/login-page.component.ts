import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthenticationService } from "../../services";
import { SidebarComponent } from "../../../shared/sidebar/sidebar.component";
import { HttpModule } from "@angular/http";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"],
  providers: [AuthenticationService, SidebarComponent]
})
export class LoginPageComponent {
  postdata: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private sidebar: SidebarComponent
  ) {}

  ngOnInit() {
    this.authenticationService.logout();
    // get return url from route parameters or default to '/'
    if (this.authenticationService.isAdmin) {
      this.returnUrl =
        this.route.snapshot.queryParams["returnUrl"] || "/approvalhome";
    } else {
      this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/+home";
    }
  }

  login(event) {
    event.preventDefault();
    //this.router.navigate(['/dashboard/+analytics'])
    this.loading = true;
    this.authenticationService
      .login(this.postdata.email, this.postdata.password)
      .subscribe(
        data => {
          this.loading = false;
          //this.router.navigate([this.returnUrl]);
          if (this.authenticationService.isAdmin()) {
            this.router.navigate(["/pages/home"]);
          } else {
            this.router.navigate(["/pages/home"]);
          }
        },
        error => {
          this.loading = false;
        }
      );
    this.sidebar.ngOnInit();
  }

  // On Forgot password link click
  onForgotPassword() {
    this.router.navigate(["forgotpassword"], { relativeTo: this.route.parent });
  }
  // On registration link click
  onRegister() {
    this.router.navigate(["register"], { relativeTo: this.route.parent });
  }
}
