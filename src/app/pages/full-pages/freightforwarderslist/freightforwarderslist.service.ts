import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import { throwError } from "rxjs";

import { environment } from "environments/environment";

@Injectable()
export class FreightforwarderlistService {
  constructor(private http: HttpClient) {}

  getalllist() {
    const url = `${environment.webapibaseurl}corporateforwarders/`;
    return this.http
      .get(url)
      .map((response: any) => response)
      .catch((error: any) => {
        const body = error.error;
        const errMsg = body.Message
          ? body.Message
          : error.status
          ? `${error.status} - ${error.statusText}`
          : "Server error";
        return throwError(errMsg);
      });
  }
}
