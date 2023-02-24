import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
    //Create FormGroup
    requiredForm!: FormGroup;
    submitted= false ;
    submittedCheck= false ;
    fname: string ='';
    lname: string ='';
    email: string ='';
    mobile: string ='';
    password: string ='';
    confirmPassword: string ='';
  toastrService: any;
   
    constructor(private formBuilder: FormBuilder, private http: AuthService, private routerr: Router, private toastr: ToastrService) { 
        
    }

    ngOnInit(){
      this.requiredForm = this.formBuilder.group({
        firstName:[null, Validators.required],
        lastName: ['', Validators.required],
        Mobile: ['', [Validators.required, Validators.minLength(10)]],
        email: ['', [Validators.required,Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
      }
    );
    // this.http
		// 	.signUp(this.data).subscribe(res => console.log(res))
    }

    onSubmit() {
     const data = {
        fname: this.fname,
        lname: this.lname,
        email: this.email,
        mobile: this.mobile,
        password: this.password,
      }
      this.submitted = true;
      // stop here if form is invalid
      if (this.requiredForm.invalid || this.password!==this.confirmPassword) {
          this.submittedCheck = true;
          return;
      }
      this.http.signUp(data).subscribe(message=>{
        // console.log(message.messages.success);
        if(message.messages.success === "true"){
          // this.toastrService.info("account Created !");
          this.toastr.success('Account Created', 'Successfully!');
          this.routerr.navigate(["/login"]);
        }
      });

      
      // display form values on success
     // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.requiredForm.value, null, 4));

  }

  onReset() {
      this.submitted = false;
      this.requiredForm.reset();
  }

}

function MustMatch(arg0: string, arg1: string): any {
  throw new Error('Function not implemented.');
}

