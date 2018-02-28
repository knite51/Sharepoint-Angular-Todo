import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  signUpFormGroup: FormGroup;
  constructor(private router: Router) { }

  ngOnInit() { 
    this.signUpFormGroup = new FormGroup({
      'email': new FormControl(null),
      'password': new FormControl(null)
    })
   }

   onSignup(){
     const email = this.signUpFormGroup.value.email;
     const password = this.signUpFormGroup.value.password;
     this.router.navigate(['/signin'])
   }

}
