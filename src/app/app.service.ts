import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = 'https://chatapi.edwisor.com/api/v1/';

  constructor(private _http: HttpClient) {
    console.log("app service is called");
  }

  //for guard 
  isChatAccess(): any {
    return true;
  }

  public signupFunction(data): Observable<any> {
    console.log('service', data)
    const params = new HttpParams()
      .set('firstName', data.firstName)
      .set('lastName', data.lastName)
      .set('email', data.mobile)
      .set('email', data.email)
      .set('password', data.password)
      .set('apiKey', data.apiKey)
    return this._http.post(`${this.url}users/signup`, params)
  }

  public loginFunction(data): Observable<any> {
    console.log('login data', data);
    let params = new HttpParams()
      .set('email', data.email)
      .set('password', data.password)

    return this._http.post(`${this.url}users/login`, params);
  }

  public getUserInfoInFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('UserInfo'))
  }

  public setUserInfoInLocalStorage = (data) => {
    console.log('local storage', data)
    localStorage.setItem('UserInfo', JSON.stringify(data));
  }

}
