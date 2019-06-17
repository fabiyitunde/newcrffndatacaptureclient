import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { AuthenticationService } from ".";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(public auth: AuthenticationService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if(this.auth.isAuthenticated){
            req = req.clone({
                setHeaders: {
                    "x-auth-token" : `${this.auth.getToken()}`
                }
            });
        }
        return next.handle(req);
    }
}