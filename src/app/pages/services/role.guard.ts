import { AuthenticationService } from "./authentication.service";
import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  Route
} from "@angular/router";
import { Observable } from "rxjs";
import { stringify } from "@angular/compiler/src/util";

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    private _authService: AuthenticationService,
    private _router: Router
  ) {}
  admin: String;
  dataentry: String;
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const userinfo = JSON.parse(localStorage.getItem("userinfo"));
    const user = userinfo.user;
    const roles = user.usertype;
    console.log(roles);

    if (roles === 1) {
      this.admin = "Administrator";
      if (this.admin === next.data.role) {
        console.log(next.data.role);
        return true;
      }

      this._router.navigate(["pages/404"]);
      return false;
    } else if (roles !== 1) {
      this.dataentry = "DataEntry";
      if (this.dataentry === next.data.role) {
        return true;
      }

      this._router.navigate(["pages/404"]);
      return false;
    }
  }
}
