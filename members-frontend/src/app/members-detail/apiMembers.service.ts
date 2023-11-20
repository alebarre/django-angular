import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:8000/'

  token = 'Token 1dc98d9b0db638c89ed565ca3c10448d95e21bee';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.token);

  constructor(private http: HttpClient) { }

  getMember(id: number): Observable<any>{
    return this.http.get(this.baseUrl + 'members/' + id + '/', {headers: this.httpHeaders})
  }

}
