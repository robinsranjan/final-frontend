import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  //add user 
  public addUser(user: any) {
    return this.http.post(`${baseUrl}/registeruser/`, user);
  }

  public addAdmin(user: any) {
    return this.http.post(`${baseUrl}/registeradmin/`, user);
  }

  download(file: string | undefined): Observable<Blob> {
    return this.http.get(`${baseUrl}http://localhost:8081/users/export/pdf/`, {
      responseType: 'blob'
    });
  }
}
