import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  proceedLogin(inputData: any) {
    return this.http.post(' http://localhost:6004/user/accounts/login', inputData)
    
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

  getToken() {
    return (localStorage.getItem('token') !== null) ? localStorage.getItem('token') :"";
  }

  initiateRegister(inputData: any) {
    return this.http.post('http://localhost:6004/user/accounts', inputData);
  }
}
