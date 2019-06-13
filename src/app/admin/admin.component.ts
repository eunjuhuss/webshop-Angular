import {  Component, OnInit } from '@angular/core';
import {  DataService } from '../services/data.service';
import {  IOrder, IOrderRow } from '../interfaces/iorder';
import {  IProduct } from '../interfaces/iproduct';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public orderDetails: IOrder[];
  public orderRows: IOrderRow[];
  
  
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getOrderData()
      .subscribe(orderList => {
          this.orderDetails = orderList;
          console.log(this.orderDetails);          
        },
        err => {
          console.log(err.message);
        },
        () => {
          console.log('completed');
        }
      );
  }

 }


