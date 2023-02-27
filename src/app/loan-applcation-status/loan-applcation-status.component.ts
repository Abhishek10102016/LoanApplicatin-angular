import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-loan-applcation-status',
  templateUrl: './loan-applcation-status.component.html',
  styleUrls: ['./loan-applcation-status.component.css']
})

export class LoanApplcationStatusComponent {
  Users: any;
  res: any = [] ;
  currentdata: any=[];
  session = localStorage.getItem('session') as string;
  id = JSON.parse(this.session).id;
 constructor(private http: AuthService){
  this.http.allApplicationById(this.id).subscribe(response=>{
    this.res = response;
   })
 }  
 callApi(){
   this.http.allApplicationById(this.id).subscribe(response=>{
    this.res = response;
   })
 }

 currentDetail(data : object){
      this.currentdata = data;
 }
}
