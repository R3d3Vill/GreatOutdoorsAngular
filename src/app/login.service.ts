import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }
  private loginApiUrl = 'http://localhost:7072/loginApi';
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json')};

  authenticate(userName:string,password:string):Observable<Login>{
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(userName+":"+password)})
     return this.httpClient.get<Login>(this.loginApiUrl+'/authenticate',{headers});
    }
    
    addCredentials(login:Login):Observable<Login>{
      const headers = new HttpHeaders({Authorization: 'Basic '+btoa('admin'+":"+'p@ssw0rd')})
      return this.httpClient.get<Login>(this.loginApiUrl+'/addCredentials/'+encodeURIComponent(JSON.stringify(login)),{headers});
    }
}
