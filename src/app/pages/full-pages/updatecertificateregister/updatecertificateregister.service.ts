import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError } from "rxjs";

import { Response } from "@angular/http";

import { environment } from "environments/environment";

@Injectable()
export class UpdateCertificateRegisterService {
  constructor(private http: HttpClient) {}

  getcertificateregisterdetail(id: any) {
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

  saverecord(model: any) {
    const url = `${
      environment.webapibaseurl
    }certificateregister/updateCertificateRegister`;
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
