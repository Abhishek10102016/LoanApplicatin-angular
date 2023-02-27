import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-user-show',
  templateUrl: './admin-user-show.component.html',
  styleUrls: ['./admin-user-show.component.css']
})
export class AdminUserShowComponent {
   Users: any;
   res: any = [];


   constructor(private http: AuthService){
    
   }
}
