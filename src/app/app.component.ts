import { Component } from '@angular/core';
import { AuthCurdServiceService } from './auth/auth-curd-service.service';
import { AuthTokenServiceService } from './auth/auth-token-service.service';
import { HttpClient } from '@angular/common/http';
import { BaseModal } from 'angular-basic-modal/base-modal.component';
import { BaseModalConfig } from 'angular-basic-modal/base-modal-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseModal {
  constructor( bmc: BaseModalConfig,
              private authSerCrud: AuthCurdServiceService, 
              private authtoken: AuthTokenServiceService,
              )
              { super(bmc);}

  ngOnInit() {
    this.authSerCrud.setFormDigestValue();
  }
  
}
