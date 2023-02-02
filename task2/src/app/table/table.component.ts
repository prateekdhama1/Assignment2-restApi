import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent  implements OnInit{

  protected title = 'app';
  users: any;

   constructor(public userservice: ServiceService) {}
 
   ngOnInit() {
    this.userservice.getUsers().subscribe(data => {
      this.users = data;
      console.log(data)
     });
   }



}
