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

  getAllMembers(): Observable<any> {
    return this.http.get(this.baseUrl + 'members/', {headers: this.httpHeaders})
  }

  getMember(id: any): Observable<any>{
    return this.http.get(this.baseUrl + 'members/' + id + '/', {headers: this.httpHeaders})
  }

  updateMember(member: any): Observable<any>{
    let body = {  name: member.name,
                  surname: member.surname,
                  phone: member.phone,
                  adress: member.adress }
    return this.http.put(this.baseUrl + 'members/' + member.id + '/', body, {headers: this.httpHeaders})
  }

  saveMember(member: any):Observable<any> {
    return this.http.post(this.baseUrl + 'members/', member, {headers: this.httpHeaders})
  }

  deleteMember(id: any): Observable<any>{
    return this.http.delete(this.baseUrl + 'members/' + id + '/', {headers: this.httpHeaders})
  }

}
