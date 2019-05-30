import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getOrderData().subscribe(
      response => {console.log(response);},
      err => {console.log(err.message);},
      ()=> {console.log('completed');}  
    );  
  }
}
