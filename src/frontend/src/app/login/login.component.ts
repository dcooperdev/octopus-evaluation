import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/auth/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm:FormGroup;
  public error: string = '';

  constructor( private login: LoginService, private router: Router ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username_email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  submit() {
    this.login.send( this.loginForm.value )
        .subscribe( (response: string) => {
          console.log(response);
          localStorage.setItem('token', `bearer ${response}`);
          this.router.navigate(['/']);
        }, error => {
          console.log(error);
          this.error = error.error;
        });
  }

}
