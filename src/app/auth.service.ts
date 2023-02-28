import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { userApi } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{
  private data :any[]=[];
  apiUrl = 'http://localhost/snigdh_ci4/api';
  onChangeData = new EventEmitter<userApi[]>();
  constructor(private http: HttpClient) { }
  ngOnInit(): void {

  }
  getFirstData(){
    let a = this.http.get<any>(
      this.apiUrl + `/search?page=${1}&recordlimit=${10}&keyWord=${""}`
    );
    a.subscribe((a)=>{
      this.data = a.data;
      this.onChangeData.emit(this.data.slice());
    });
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
  updateStatus(data: {}){
    // let sentId = {'id': 42}
    // console.log(sentId);
    return this.http.post<any>('http://localhost/snigdh_ci4/APi/updateuser',data);
  }
  search(page: number = 1, record: number = 10, key: string) {
    let a = this.http.get<any>(
      this.apiUrl + `/search?page=${page}&recordlimit=${record}&keyWord=${key}`
    );

    return a;
  }
  searchApplication(page: number = 1, record: number = 10, key: string) {
    let a = this.http.get<any>(
      this.apiUrl + `/searchApplication?page=${page}&recordlimit=${record}&keyWord=${key}`
    );

    return a;
  }
  deleteUser(id: string = '') {
    let a = this.http.delete<{id: string, message: string, success: string}>(this.apiUrl + `/deleteuser/${id}`);
    a.subscribe((res:{id: string, message: string, success: string})=>{
      if (res.success==="true"){
        this.data = this.data.filter((el)=>el.id!==id);
        this.onChangeData.emit(this.data);
      }
    });
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
