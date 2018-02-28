import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthCurdServiceService } from './auth-curd-service.service';
import { AuthTokenServiceService } from './auth-token-service.service';



@Injectable()
export class AuthCurdInterceptor implements HttpInterceptor, OnInit {

  formDigestValue: string;

  constructor(
    private formToken: AuthTokenServiceService,
    private authSerCrud: AuthCurdServiceService, ) {
  }

  ngOnInit() { }


  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    this.formDigestValue = this.authSerCrud.getFormDigVal();

    req = req.clone({
      setHeaders: {
        'X-RequestDigest': `${this.formDigestValue}`,
        'Accept': 'application/json;odata=verbose;',
        'Content-Type': 'application/json;odata=verbose;',
      }
    })

    return next.handle(req);

  }
}

