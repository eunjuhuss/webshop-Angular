import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { IProduct } from '../interfaces/iproduct';
import { ICart } from '../interfaces/ICart';
import { IOrder, IOrderRow } from '../interfaces/iorder';
//time from moment
import * as moment from 'moment';
import { Router } from '@angular/router';


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
  public orderRows:IOrderRow[] = [];
  // bara 1
  public orders:IOrder;
  public orderTime = moment().format('LLLL');
  constructor(private dataService: DataService, private router: Router) { }


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

  emptyCart(){    
    this.dataService.removeAllProductFromCart(); 
    this.cart = this.dataService.getProductFromCart(); 
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

  orderMovies(name, email){
    console.log(name, email);
    event.preventDefault();

    for(var i=0; i< this.cart.length; i++){
      this.orderRows.push({ProductId: this.cart[i].product.id, Amount: this.cart[i].amount});
    };

    this.orders = {
      id: 0, 
      companyId: 1,
      created: this.orderTime,
      createdBy: name,
      paymentMethod: 'bankID',
      totalPrice: this.total,
      //olika betalt status
      status: 0,
      orderRows: this.orderRows
    }
    console.log(this.orders);

    this.dataService.checkoutOrders(this.orders).subscribe(
      response => {console.log(response);},
      err => {console.log(err.message);},
      ()=> {console.log('completed');}
    );
    localStorage.clear();
    this.router.navigate(['/home']);
  }

  


  ngOnInit() {
    this.cart = this.dataService.getProductFromCart();
    console.log(this.cart);   
  }
}