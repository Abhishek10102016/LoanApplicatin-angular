import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { allLonaResponse, userApi } from '../interfaces';
import {allUserRes} from "../interfaces";
@Component({
  selector: 'app-admin-app-show',
  templateUrl: './admin-app-show.component.html',
  styleUrls: [
    './admin-app-show.component.css',
  ]
})
export class AdminAppShowComponent {
     constructor(private service: AuthService){
    }
      ngOnInit(): void {
        this.service.onChangeData.subscribe((el:typeof allLonaResponse[])=>{
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
    data:typeof allLonaResponse[]=[];
     

     currentUserId = '';
     page = 1;
     totalpages = 5;
     recordLimit = 10;
     pageArr: number[] = [];
     key = '';
     currentdata: any = {};

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

     searchApplication(key = this.key, page = this.page, recordlimit = this.recordLimit) {}
     toggle() {

     }
   
     setRecordLimit(event: Event) {
       this.recordLimit = Number((event.target as HTMLSelectElement).value);
       this.service.searchApplication(1, this.recordLimit, this.key).subscribe((res) => {
         (this.data = res),
           (this.totalpages = res.totalpages),
           this.updatePages(),
           (this.page = 1);
       });
     }
     setPageNo(page: number) {
       this.page = page;
       this.service
         .searchApplication(this.page, this.recordLimit, this.key)
         .subscribe((res) => {
           (this.data = res),
             (this.totalpages = res.totalpages),
             this.updatePages();
         });
     }
     onSearchApplication(key: any) {
       this.key = key['keyWord'];
       this.service
         .searchApplication(this.page, this.recordLimit, key['keyWord'])
         .subscribe((res) => {
           (this.data = res),
             (this.totalpages = res.totalpages),
             this.updatePages(),
             (this.page = 1);
         });
     }
     UpdateStatus(data: {}) {
      this.service.updateStatus(data).subscribe((res) => {
        this.ngOnInit();
      });
    }
    currentDetail(data: {}) {
      this.currentdata = data;
    }
    //  deleteUser() {
    //    console.log(this.currentUserId);
    //    this.service.deleteUser(this.currentUserId);
    //   //  window.location.reload();
    //  }
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

