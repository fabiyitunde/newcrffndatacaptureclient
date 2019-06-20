import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import { Observable } from "rxjs/observable";

import { environment } from "environments/environment";

@Injectable()
export class UnsubmitedCorporateDataListService {
  constructor(private http: HttpClient) {}

  getunsubmittedcorporatelist(id: any) {
    const url = `${
      environment.webapibaseurl
    }coporate/getUnSubmittedCoporateDataList/${id}`;
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
        return Observable.throw(errMsg);
      });
  }
}