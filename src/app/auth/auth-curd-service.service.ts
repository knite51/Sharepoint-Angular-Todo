import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AuthTokenServiceService } from './auth-token-service.service';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class AuthCurdServiceService {

  intervalObservable = Observable.timer(0, 179000);

  constructor(private http: Http,
              private authServ: AuthTokenServiceService) { }

   postRequest() {
     this.authServ.tokenChanged.subscribe(
      (result) => {
        const formDigVal = result;
        // store token value into localstorage
        localStorage.setItem('FormDigestValue', formDigVal);

      }
    );
  }

  // set intervals to generate new tokens
  
  setFormDigestValue() {
    this.postRequest();
    this.intervalObservable.subscribe(() => {
      this.authServ.generateToken();
      
    });

  }

  getFormDigVal() {
    return localStorage.getItem('FormDigestValue');
  } 


}
