import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  ProceedLogin(inputData: any) {
    return this.http.post(' http://localhost:6004/user/accounts/login', inputData)
    
  }
}
