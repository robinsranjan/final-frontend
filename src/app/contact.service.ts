import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import {Contact} from './contact'

@Injectable({
  providedIn: 'root'
})


export class ContactService {

private baseUrl="http://localhost:8081/usersmessages"

  constructor(private HttpClient :HttpClient) { }

  getMessagesList():Observable<Contact[]>{
 return this.HttpClient.get<Contact[]>(`${this.baseUrl}`)
  }


  createMessage(contact:Contact):Observable<Object>
  {
    return this.HttpClient.post(`${this.baseUrl}`,contact)
  }

  deleteMessage(id:number):Observable<Object>{
    return this.HttpClient.delete(`${this.baseUrl}/${id}`)
  }

}
