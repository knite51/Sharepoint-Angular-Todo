import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';

import { AppRoutesModule } from './app.routes.module';
import { CoreModule } from './core/core.module';
import { TodoModule } from './todo/todo.module';
import { SharedModule } from './shared/shared.module';
import { AuthTokenServiceService } from './auth/auth-token-service.service';
import { AuthCurdServiceService } from './auth/auth-curd-service.service';
import { TodoService } from './todo/todo.services';

import { AuthCurdInterceptor } from './auth/auth-curd-interceptor';
import { AngularBasicModalModule } from 'angular-basic-modal';
import { BaseModalConfig } from 'angular-basic-modal/base-modal-config';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    HttpModule,
    HttpClientModule,
    CoreModule,
    TodoModule,
    SharedModule,
    AngularBasicModalModule
  ],
  providers: [AuthTokenServiceService, AuthCurdServiceService, 
    TodoService, BaseModalConfig,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthCurdInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
