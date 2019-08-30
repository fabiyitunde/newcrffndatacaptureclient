import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
//import "rxjs/add/observable/throw";
import { throwError } from "rxjs";
import {
  Http,
  Headers,
  RequestOptions,
  Response,
  RequestMethod
} from "@angular/http";

import { environment } from "environments/environment";

@Injectable()
export class CorporatedetailService {
  constructor(private http: HttpClient) {}

  getcorporatefreightforwardersdetail(id: any) {
    const url = `${
      environment.webapibaseurl
    }corporateforwarder/getCorporateForwarderById/${id}`;
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
    }corporateforwarder/updateCorporateForwarder`;
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
