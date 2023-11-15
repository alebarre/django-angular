import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:8000/'

  httpHeaders = new HttpHeaders({'COntent-Type' : 'application/json'});

  constructor(private http: HttpClient) { }

  getMember(id: number): Observable<any>{
    return this.http.get(this.baseUrl + 'members/' + id + '/', {headers: this.httpHeaders})
  }

}
