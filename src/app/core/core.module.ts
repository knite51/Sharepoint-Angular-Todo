import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { AppRoutesModule } from '../app.routes.module';
import { SharedModule } from '../shared/shared.module';
import { SigninComponent } from '../auth/signin/signin.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AppRoutesModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [AppRoutesModule, HeaderComponent ]
})

export class CoreModule { }
