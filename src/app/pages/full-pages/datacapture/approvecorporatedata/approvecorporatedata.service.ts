import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { Response } from "@angular/http";
import { throwError } from "rxjs";
import { environment } from "environments/environment";

@Injectable()
export class ApproveCorporateDataService {
  constructor(private http: HttpClient) {}

  getcorporatedata(id: any) {
    const url = `${
      environment.webapibaseurl
    }coporate/getCoporateDataById/${id}`;
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
  approverecord(model: any) {
    const url = `${environment.webapibaseurl}coporate/approveCoporateData`;
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
  returnrecord(model: any) {
    const url = `${environment.webapibaseurl}coporate/returnCoporateData`;
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
}
