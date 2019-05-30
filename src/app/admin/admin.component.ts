import {  Component, OnInit } from '@angular/core';
import {  DataService } from '../services/data.service';
import {  IOrder } from '../interfaces/iorder';
import {  IProduct } from '../interfaces/iproduct';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public orderDetails: IOrder[];
  // public singleProductDetail: IProduct[] = [];

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
    // this.orderDetails.map((order) => {
    //   this.dataService.getData().subscribe(films => {
    //     let film = films.find(f => f.id === order.orderRows[0].ProductId);
    //     this.singleProductDetail.push(film);
    //     console.log(film.id);
    //   })
    // });
    console.log(this.orderDetails);
  }
}
