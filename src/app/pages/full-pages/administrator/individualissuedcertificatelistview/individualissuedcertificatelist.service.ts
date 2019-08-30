import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

import { environment } from "environments/environment";
import { throwError } from "rxjs";

@Injectable()
export class IndividualIssuedCertificateListService {
  constructor(private http: HttpClient) {}

  getindividualissuedcertificatelist() {
    const url = `${
      environment.webapibaseurl
    }individual/getIndividualMemeberListIssuedCertificates`;
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
