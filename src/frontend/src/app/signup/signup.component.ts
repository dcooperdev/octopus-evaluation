import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { SignupService } from '../services/auth/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signupForm:FormGroup;
  public error: string = '';

  constructor( private signup: SignupService, private router: Router ) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      complete_name: new FormControl('', [Validators.required]),
      username_email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  submit() {

    this.signup.send( this.signupForm.value )
        .subscribe(
          ( response: string ) => {
            localStorage.setItem('token', `bearer ${response}`);
            this.router.navigate(['/']);
          }, error => {
            this.error = error.error;
          }
        );
  }


}
