import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms' 
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {
  userIdObject = {userid: "", user: ""};
  submittedLoginFalse = false ;
  validEmail = false ;
  constructor(private fb: FormBuilder, private http: AuthService, private toastr: ToastrService, private router: Router) {
    this.myForm();
  }
  email: string = "";
  password: string = "";
  requiredForm!: FormGroup;

  myForm() {
     this.requiredForm = this.fb.group({
     email: ['', [Validators.required, 
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")] ],
        password:[Validators.requiredTrue]
     });
  }
  hello(i:any){
    console.log("called");
    console.log(i);
    return i.required;
  }
  ngOnInit(){}

  onSubmitLogin(){
     const data = {
      email: this.email,
      password: this.password
     }
     this.validEmail=true;
     this.http.login(data).subscribe(backData => {
      console.log(backData);
          if(backData.messages.success === "false"){
             this.submittedLoginFalse = true;
          }
          if(backData.messages.success === "true" && backData.messages.role === "admin"){
            let session = {
              id: backData.messages.id,
              role: backData.messages.role,
              fname:backData.messages.fname,
              lname:backData.messages.lname,
            };
            localStorage.setItem('session', JSON.stringify(session));
            this.toastr.success('Logged in', 'Successfully!');
            this.router.navigate(["/admin"]);
            // this.router.navigate(["/userDashboard"]);
          }
          if(backData.messages.success === "true" && backData.messages.role === "user"){
            let session = {
              id: backData.messages.id,
              role: backData.messages.role,
              fname:backData.messages.fname,
              lname:backData.messages.lname,
            };
            localStorage.setItem('session', JSON.stringify(session));
            this.toastr.success('Logged in', 'Successfully!');
            this.router.navigate(["/userDashboard"]);
            this.http.getDetails(session.id).subscribe(res=>{console.log(res)})

            // this.router.navigate(["/userDashboard"]);
          }
          });

       
  }
}
