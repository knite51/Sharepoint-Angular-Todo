import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { TodoComponent } from './todo/todo.component';
import { TodoEditComponent } from './todo/todo-edit/todo-edit.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent},
  { path: 'dist', component: HomeComponent, },
  { path: 'todo-list', component: TodoComponent},
  { path: 'todo-list/new', component: TodoEditComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [ RouterModule ]
})

export class AppRoutesModule { }
