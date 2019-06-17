import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { throwError } from "rxjs";

import { environment } from "environments/environment";

@Injectable()
export class UnissuedCertificateListService {
  constructor(private http: HttpClient) {}

  getunsubmittedcertificateregisterlist(id: any) {
    const url = `${
      environment.webapibaseurl
    }certificateregister/getUnIssuedCertificateRegisterList`;
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

  issuecertificate(model: any) {
    const url = `${
      environment.webapibaseurl
    }certificateregister/issueCertificate`;
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
