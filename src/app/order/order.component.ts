import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { IProduct } from '../interfaces/iproduct';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  public cart = [];
 
  constructor(private dataService: DataService) { }

  emptyCart(){
  this.dataService.removeAllProductFromCart();
   return this.dataService.getProductFromCart();    
  } 
 

  ngOnInit() {
    this.cart = this.dataService.getProductFromCart();
    console.log(this.cart);
    
 
  }

}
