import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor( private http: HttpClient ) { }

  send( data ) {
    const { complete_name, username_email, password } = data;

    return this.http.post('http://localhost:3000/api/v1/signup', {
      complete_name,
      username_email,
      password
    });
  }

  checkEmailExists( username_email: string ) {
    return this.http.get('http://localhost:3000/api/v1/signup', {
      headers: new HttpHeaders({
        username_email
      })
    });
  }
}
