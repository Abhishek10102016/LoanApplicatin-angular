import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-dashboard-header',
  templateUrl: './user-dashboard-header.component.html',
  styleUrls: ['./user-dashboard-header.component.css']
})
export class UserDashboardHeaderComponent {
  constructor(private router: Router){}

  logout(){
    localStorage.removeItem('session');
    localStorage.clear();
    this.router.navigate([""]);
  }
}
