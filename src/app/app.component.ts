import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // // title = 'Loan-application-app';
  // constructor(private http: AuthService) {}
	// title = 'api-angular';
	// ngOnInit() {
	// 	// API Call
	// 	this.http
	// 		.loginCall().subscribe(data)=>{
  //       console.warn("get api data".data);
  //     }
	// }
}
