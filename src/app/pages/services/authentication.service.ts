import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { HttpModule } from "@angular/http";
import { environment } from "environments/environment";

@Injectable()
export class AuthenticationService {
  constructor(private http: Http) {
    //this.headers.append("token", localStorage.getItem("token"));
  }

  login(username: string, password: string) {
    var url = `${environment.webapibaseurl}auth`;
    //this.headers.append("token", localStorage.getItem("token"));
    //let options = new RequestOptions({ headers: this.headers });
    return this.http
      .post(url, { email: username, password: password })
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let ret = response.json();
        //   alert(JSON.stringify(user));
        const returnbody = response.json();
        const jsonstring: string = JSON.stringify(returnbody);
        localStorage.setItem("userinfo", jsonstring);

        return returnbody; //   alert(JSON.stringify(user));
      })
      .catch((error: any) => {
        const body = JSON.parse(error._body);
        const errMsg = body.error_description
          ? body.error_description
          : error.status
          ? `${error.status} - ${error.statusText}`
          : "Server error";
        return Observable.throw(errMsg);
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("userinfo");
  }

  public getToken(): string {
    const userinfo = localStorage.getItem("userinfo");
    if (userinfo) {
      return JSON.parse(userinfo).access_token;
    } else {
      return "";
    }
  }

  public getUserName(): string {
    return JSON.parse(localStorage.getItem("userinfo")).name;
  }

  public isAuthenticated(): boolean {
    // get the token
    var userinfo = localStorage.getItem("userinfo");
    if (userinfo) {
      return true;
    } else {
      return false;
    }
  }

  public isAdmin(): boolean {
    // var userinfo = JSON.parse(localStorage.getItem('userinfo'));
    // if (userinfo.isAdmin == true) {
    //     return true;
    // } else {
    //     return false;
    // }
    return JSON.parse(localStorage.getItem("userinfo")).isAdmin;
  }
}
