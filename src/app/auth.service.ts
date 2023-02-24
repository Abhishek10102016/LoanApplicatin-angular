import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  signUp(data: object){
    console.log(data);
    return this.http.post<any>('http://localhost/snigdh_ci4/APi/signup',data);
  }
  login(data: object){
    console.log(data);
    return this.http.post<any>('http://localhost/snigdh_ci4/APi/login',data);
  }
  applyForLoan(data: object){
    console.log(data);
    return this.http.post<any>('http://localhost/snigdh_ci4/APi/loanapply',data);
  }
  
}
