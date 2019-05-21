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


  
  removeItem(product){
    let selsectedItem = this.cart;
    console.log(selsectedItem);
    
    this.dataService.removeProductFromCart(product);
    
  }

  ngOnInit() {
    this.cart = this.dataService.getProductFromCart();  
  }

}
