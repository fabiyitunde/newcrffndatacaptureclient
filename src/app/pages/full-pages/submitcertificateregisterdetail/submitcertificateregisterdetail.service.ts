import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import { throwError } from "rxjs";
import { Response } from "@angular/http";

import { environment } from "environments/environment";

@Injectable()
export class SubmitcertificateregisterdetailService {
  constructor(private http: HttpClient) {}

  getfreightforwardersdetail(id: any) {
    const url = `${
      environment.webapibaseurl
    }certificateregister/getCertificateRegisterById/${id}`;
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

  submitrecord(model: any) {
    const url = `${
      environment.webapibaseurl
    }certificateregister/submitCertificateRegister`;
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
