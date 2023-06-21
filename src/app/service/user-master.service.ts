import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserMasterService {

  constructor(private http:HttpClient) { 
    
  }

  apiurl = 'http://localhost:6004';

  GetAllUsers() {
    return this.http.get(`${this.apiurl}/user/accounts`);
  }

  GetUserByEmails(emails: string) {
    return this.http.get(`${this.apiurl}`)
  }


}
