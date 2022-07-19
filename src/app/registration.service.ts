import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { plans } from './plans';
import { Smspojo } from './smspojo';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http: HttpClient) { }

  public loginUserFromRemote(user: User): Observable<any> {
    return this._http.post<any>("http://localhost:8081/login", user);
  }

  public adminlogin(user: User): Observable<any> {
    return this._http.post<any>("http://localhost:8081/adminlogin", user);
  }

  public addprepaidplan(plans: plans): Observable<Object> {
    return this._http.post<any>("http://localhost:8081/addprepaidplan", plans);
  }


  getPrepaidplan(): Observable<plans[]> {
    return this._http.get<plans[]>("http://localhost:8081/plans");
  }

  public addpostpaidplan(plans: plans): Observable<Object> {
    return this._http.post<any>("http://localhost:8081/addpostpaidplan", plans);
  }

  public adddongleplan(plans: plans): Observable<Object> {
    return this._http.post<any>("http://localhost:8081/adddongleplan", plans);
  }
  getPostpaidplan(): Observable<plans[]> {
    return this._http.get<plans[]>("http://localhost:8081/postpaidplans");
  }

  getDongleplan(): Observable<plans[]> {
    return this._http.get<plans[]>("http://localhost:8081/dongleplans");
  }
  updatepwd(user: User): Observable<any> {
    return this._http.post("http://localhost:8081/updatepwd", user)
  }
  sendotp(smspojo: Smspojo): Observable<any> {
    return this._http.post("http://localhost:8081/mobileNo", smspojo, { responseType: 'text' })
  }
  verifyotp(smspojo: Smspojo): Observable<any> {
    return this._http.post("http://localhost:8081/otp", smspojo, { responseType: 'text' })
  }

}
