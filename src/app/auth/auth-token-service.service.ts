import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import 'rxjs/Rx';
import { Subject } from 'rxjs/Rx';
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable()

export class AuthTokenServiceService {

  tokenChanged = new Subject<any>();

  constructor(private http: HttpClient) { }

  generateToken() { 

    const url = '_api/contextinfo?$select=FormDigestValue';

    const params = new HttpParams();

    return this.http.post(url, params, { responseType: 'json' })
    .subscribe((result:any) => {
      this.tokenChanged.next(result.d.GetContextWebInformation.FormDigestValue);
    });
  }


}
