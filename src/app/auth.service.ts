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
  getDetails(data: number){
    let sentId = {'Id': data}
    console.log(sentId);
    return this.http.get<any>(`http://localhost/snigdh_ci4/APi/getDetails?Id=${data}`);
  }
  allApplicationById(data: number){
    let sentId = {'id': 42}
    // console.log(sentId);
    return this.http.post<any>('http://localhost/snigdh_ci4/APi/allApplicationById',sentId);
  }
  session = localStorage.getItem('session') as string;
  id = JSON.parse(this.session)?.id
  role = JSON.parse(this.session)?.role
  
  checkLogin = ()=>{
    if (this.id){
      return true;
    }
    else{
      return false;
    }

  }

  getRole = ()=> {
    if (this.role){
      console.log(this.role)
      return this.role;
    }
    else{
      return ''
    }
  }
  
}
