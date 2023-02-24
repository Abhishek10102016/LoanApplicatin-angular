import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { defaultUrlMatcher, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-apply-for-loan',
  templateUrl: './apply-for-loan.component.html',
  styleUrls: ['./apply-for-loan.component.css']
})
export class ApplyForLoanComponent {
  obj = localStorage.getItem('session') as string;
  id = JSON.parse(this.obj)?.id;

  applyLoanForm!: FormGroup;
  submitted = false;
  submittedCheck = false;
  fname: string ='';
  lname: string ='';
  gender: string = '';
  email: string ='';
  mobile: string = '';
  aadhar: string = '';
  panNo: string = '';
  profession: string='';
  income: string='';
  loanAmt: string='';
  duration: string='';
  flatNo: string='';
  locality: string='';
  pincode: string='';
  place: string='';
  country: string='';

  constructor(private formBuilder: FormBuilder, private http: AuthService, private router: Router, private toastr: ToastrService){}

  ngOnInit(){
    this.applyLoanForm = this.formBuilder.group({
      firstName:[null, Validators.required],
      lastName: ['', Validators.required],
      Mobile: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required,Validators.email]],
      income: ['', Validators.required],
      aadharNo: ['', [Validators.required, Validators.minLength(12)]],
      PanNo: ['',  [Validators.required, Validators.minLength(10)]],
      Profession: ['', Validators.required],
      Income: ['', Validators.required],
      LoanAmt: ['', Validators.required],
      Duration: ['', Validators.required],
      HouseNo: ['', Validators.required],
      Locality: ['', Validators.required],
      Pin: ['', [Validators.required, Validators.minLength(6)]],
      Place: ['', Validators.required],
      Country: ['', Validators.required],
    })
  }

  onSubmit() {
    const data = {
       fname: this.fname,
       lname: this.lname,
       email: this.email,
       mobile: this.mobile,
       gender: this.gender,
       aadhar: this.aadhar,
       pan: this.panNo,
       profession: this.profession,
       income: this.income,
       loanAmt: this.loanAmt,
       duration: this.duration,
       address1: this.flatNo,
       address2: this.locality,
       pincode: this.pincode,
       place: this.place,
       country: this.country,
       userid: this.id

     }
     this.submitted = true;

     if (this.applyLoanForm.invalid ) {
      this.submittedCheck = true;
      return;
  }

     this.http.applyForLoan(data).subscribe(res=>{
       console.log(res);
       if(res.success === "true"){
        console.log("here it works")
        this.toastr.success('SuccessFully', 'Applied for Loan');
        this.router.navigate(["/user_loan_application_status"]);
       }
       else{
         if(res.status === '409'){
          this.toastr.warning('Your have already applied');
          this.router.navigate(["/user_loan_application_status"]);
         }
       }
     })
 }

  onReset() {
    this.submitted = false;
    this.applyLoanForm.reset();
}
}
