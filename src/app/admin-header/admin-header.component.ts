import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent {
  fname: string = "";
 constructor(private router: Router, private toastr : ToastrService){
  let session = localStorage.getItem('session') as string;
     this.fname = JSON.parse(session).fname;
 }

  logout(){
    localStorage.removeItem('session');
    localStorage.clear();
    this.router.navigate(["/login"]);
    this.toastr.success('Logout Out');
  }
}
