import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/observable';
import { Http, Headers, RequestOptions, Response, RequestMethod } from '@angular/http'

import { environment } from "environments/environment";

@Injectable()
export class ProcessfreightgforwarderService {
    constructor(private http: HttpClient) {

    }

    getfreightforwardersdetail(id:any){
        const url =`${environment.webapibaseurl}freightforwarders/`;
        return this.http
        .get(url)
        .map((response: any )=> response)
        .catch((error:any)=>{
            const body = error.error;
            const errMsg = (body.Message) ? body.Message : error.status ? `${error.status} - ${error.statusText}` : 'Server error' 
            return Observable.throw(errMsg);
        }
    );
    }

}