import { Injectable } from "@angular/core";
import {
  Http,
  Headers,
  RequestOptions,
  Response,
  RequestMethod
} from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { throwError } from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
//import { webapibaseurl } from '../../../../../app.model';
import { environment } from "environments/environment";

@Injectable()
export class ModalService {
  constructor(private http: HttpClient) {}

  //   saveUploadedPassportPhoto(
  //     membershipnumber: string,
  //     passportphotograph: File
  //   ) {
  //     const url = `${
  //       environment.webapibaseurl
  //     }individual/uploadIndividualPassportPhoto`;
  //     const formData: FormData = new FormData();
  //     formData.append("passportphotograph", passportphotograph);
  //     formData.append("membershipnumber", membershipnumber);
  //     return this.http
  //       .post(url, formData)
  //       .map((response: Response) => response)
  //       .catch((error: any) => {
  //         const body = error.error;
  //         const errMsg = body.Message
  //           ? body.Message
  //           : error.status
  //           ? `${error.status} - ${error.statusText}`
  //           : "Server error";
  //         return throwError(errMsg);
  //       });
  //   }
  saveUploadedPassportPhoto(model: any) {
    const url = `${
      environment.webapibaseurl
    }individual/uploadIndividualPassportPhoto`;
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
