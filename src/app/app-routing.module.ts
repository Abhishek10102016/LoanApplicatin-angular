import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserDashboardHeaderComponent } from './user-dashboard-header/user-dashboard-header.component';
import { LoanApplcationStatusComponent } from './loan-applcation-status/loan-applcation-status.component';
import { ApplyForLoanComponent } from './apply-for-loan/apply-for-loan.component';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './services/auth.guard';
const routes: Routes = [
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: '', component: HeaderComponent,
    
  },
  {
    path: 'signup', component: SignUpComponent
  },
  {
    path: 'userDashboard', component: UserDashboardHeaderComponent,
    canActivate: [AuthGuard],
    data : {role: 'user'}
  },
  {
    path: 'user_loan_apply', component: ApplyForLoanComponent,
    canActivate: [AuthGuard], data: {role: 'user'}
  },  
  {
    path: 'user_loan_application_status', component: LoanApplcationStatusComponent,
    canActivate: [AuthGuard], data: {role: 'user'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
