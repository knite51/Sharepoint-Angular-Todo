import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
  signInFormGroup: FormGroup;
  constructor ( private router: Router ) { }

  ngOnInit() {
    this.signInFormGroup = new FormGroup({
      'email': new FormControl(null),
      'password': new FormControl(null)
    })
  }
  onLogin() {
    const email = this.signInFormGroup.value.email;
    const password = this.signInFormGroup.value.password;
    this.router.navigate(['/todo-list'])
  }

}

