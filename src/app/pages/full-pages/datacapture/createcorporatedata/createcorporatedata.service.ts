import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { throwError } from "rxjs";

import { Response } from "@angular/http";

import { environment } from "environments/environment";

@Injectable()
export class CreateCorporateDataService {
  constructor(private http: HttpClient) {}

  saverecord(model: any) {
    const url = `${environment.webapibaseurl}coporate/createCoporateData`;
    return this.http
      .post(url, model)
      .map((response: Response) => response)
      .catch((error: any) => {
        const body = error.error;
        const errMsg = body.Message
          ? body.Message
          : error.status
          ? `${error.status} - ${error.statusText}`
          : "Server error";
        return throwError(body);
      });
  }

  getcorporateissuedcertificatelist() {
    const url = `${
      environment.webapibaseurl
    }coporate/getCoporateMemeberListIssuedCertificates`;
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
  getstatelist() {
    const url = `${environment.webapibaseurl}coporate/getStatesList`;
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
