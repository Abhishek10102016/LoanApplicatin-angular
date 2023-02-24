import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserInterfaceComponent } from './login/user-interface/user-interface.component';

import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { UserDashboardHeaderComponent } from './user-dashboard-header/user-dashboard-header.component';
import { ApplyForLoanComponent } from './apply-for-loan/apply-for-loan.component';
import { LoanApplcationStatusComponent } from './loan-applcation-status/loan-applcation-status.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignUpComponent,
    UserInterfaceComponent,
    UserDashboardHeaderComponent,
    ApplyForLoanComponent,
    LoanApplcationStatusComponent,
    // CommonModule
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ToastrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
