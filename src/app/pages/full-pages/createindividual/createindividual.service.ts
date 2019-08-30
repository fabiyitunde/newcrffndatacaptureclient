import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

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
export class CreateIndividualService {
  constructor(private http: HttpClient) {}

  saverecord(model: any) {
    const url = `${
      environment.webapibaseurl
    }individualforwarder/createIndividualForwarder`;
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
