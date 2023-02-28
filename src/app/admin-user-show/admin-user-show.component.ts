import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { userApi } from '../interfaces';
import { allUserRes } from '../interfaces';

@Component({
  selector: 'app-admin-user-show',
  templateUrl: './admin-user-show.component.html',
  styleUrls: ['./admin-user-show.component.css']
})
export class AdminUserShowComponent {
  constructor(private service: AuthService){
  }
    ngOnInit(): void {
      this.service.onChangeData.subscribe((el:typeof allUserRes[])=>{
        this.data = el;
      })
      this.service.getFirstData();
    }
   
  //  data: userApi = {
  //   status: 0,
  //   error: '', //create interface
  //   data: [],
  //   totalpages: 1,
  //  };
  data:typeof allUserRes[]=[];
   

   currentUserId = '';
   pageNo = 1;
   totalpages = 5;
   recordLimit = 10;
   pageArr: number[] = [];
   key = '';

   active = false;
   isActive(){
    this.active = !this.active;
   }

   updatePages(){
    this.pageArr = [];
    for(let i=1; i <= this.totalpages; i++){
      this.pageArr.push(i);
    }
   }

   search(key = this.key, page = this.pageNo, recordlimit = this.recordLimit) {}
   toggle() {

   }
 
   setRecordLimit(event: Event) {
     this.recordLimit = Number((event.target as HTMLSelectElement).value);
     this.service.search(1, this.recordLimit, this.key).subscribe((res) => {
       (this.data = res),
         (this.totalpages = res.totalpages),
         this.updatePages(),
         (this.pageNo = 1);
     });
   }
   setPageNo(page: number) {
     this.pageNo = page;
     this.service
       .search(this.pageNo, this.recordLimit, this.key)
       .subscribe((res) => {
         (this.data = res),
           (this.totalpages = res.totalpages),
           this.updatePages();
       });
   }
   onSearch(key: any) {
     this.key = key['keyWord'];
     this.service
       .search(this.pageNo, this.recordLimit, key['keyWord'])
       .subscribe((res) => {
         (this.data = res),
           (this.totalpages = res.totalpages),
           this.updatePages(),
           (this.pageNo = 1);
       });
   }
   deleteUser() {
     console.log(this.currentUserId);
     this.service.deleteUser(this.currentUserId);
    //  window.location.reload();
   }
}
