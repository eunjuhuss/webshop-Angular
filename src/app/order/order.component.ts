import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { IProduct } from '../interfaces/iproduct';
import { ICart } from '../interfaces/ICart';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public products = [];
  public productAddedTocart = [];
  public cart:ICart[] = [];
  total: number;
  constructor(private dataService: DataService) { }


  getProducts() {
    this.dataService.getData()
    .subscribe(data => {
      this.products = data;      
      this.productAddedTocart = this.products;
    });

  }


  
  removeItem(product){ 
      this.dataService.removeProductFromCart(product);    
  }



  getTotal(){
    this.total = 0;
    this.cart = this.dataService.getProductFromCart();
    if(this.cart.length != null){
      for(let i = 0; i < this.cart.length; i++){
        let totalPrice = this.cart[i].total;
        this.total += totalPrice;
      }
      return this.total;
    }else{
      return "shopping cart is empty";
    }
  }


  ngOnInit() {
    this.cart = this.dataService.getProductFromCart();
    console.log(this.cart);   
  }
}