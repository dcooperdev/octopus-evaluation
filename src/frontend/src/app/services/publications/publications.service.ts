import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {

  constructor( private http: HttpClient ) { }

  getPublicationsList() {
    return this.http.get(`http://localhost:3000/api/v1/publication`);
  }

  getPublicationById( id ) {
    return this.http.get(`http://localhost:3000/api/v1/publication`, {
      headers: new HttpHeaders({
        id
      })
    });
  }

}
