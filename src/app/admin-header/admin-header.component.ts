import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent {

 constructor(private router: Router, private toastr : ToastrService){}

  logout(){
    localStorage.removeItem('session');
    localStorage.clear();
    this.router.navigate(["/login"]);
    this.toastr.success('Logout Out');
  }
}
