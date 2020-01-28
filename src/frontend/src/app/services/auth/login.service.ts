import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient ) { }

  send( data ) {
    const { username_email, password } = data;

    return this.http.post('http://localhost:3000/api/v1/login', {
      username_email,
      password
    });
  }
}
