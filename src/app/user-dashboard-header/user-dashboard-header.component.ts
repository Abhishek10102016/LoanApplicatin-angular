import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-dashboard-header',
  templateUrl: './user-dashboard-header.component.html',
  styleUrls: ['./user-dashboard-header.component.css']
})
export class UserDashboardHeaderComponent {
  fname: string = "";
   
  constructor(private router: Router, private toastr: ToastrService, private service: AuthService){
    let session = localStorage.getItem('session') as string;
     this.fname = JSON.parse(session).fname;
    let id = JSON.parse(session).id;
    this.service.getDetails(id).subscribe(res=>{
        console.log(res);
    })
  }

  logout(){
    localStorage.removeItem('session');
    localStorage.clear();
    this.router.navigate(["/login"]);
    this.toastr.success('Logout Out', 'Succesfuly'); 
  }


}
