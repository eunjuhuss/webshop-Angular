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
      this.dataService.removeProductFromCart(product);    
  }

  addToCart(product:IProduct){
    this.dataService.addProductToCart(product);         
  }

  getTotal(){
    var total = 0;
    this.cart = this.dataService.getProductFromCart();
    if(this.cart.length !== null){
    for(var i = 0; i < this.cart.length; i++){
        var films = this.cart[i].price;
        total += films;
    }
    return total;
  }else{
    return "shopping cart is empty"
    }
  }


  ngOnInit() {
    // this.cart = this.dataService.getProductFromCart();
    this.cart = this.dataService.getProductFromCart();
    console.log(this.cart);
    // .subscribe(data => {
    //   this.cart = data;
    // });
    
   
  }
}