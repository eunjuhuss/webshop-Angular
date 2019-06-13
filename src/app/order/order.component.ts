import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { IProduct } from '../interfaces/iproduct';
import { ICart } from '../interfaces/ICart';
import { IOrder, IOrderRow } from '../interfaces/iorder';
//time from moment
import * as moment from 'moment';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {

  public products = [];
  public productAddedTocart = [];
  public cart: ICart[] = [];
  public total: number = 0;
  public orders:IOrder;
  public orderTime = moment().format('LLLL');

  orderForm = this.fb.group({
    emailAdress: ['', Validators.required],  
    paymentMethod: ['', Validators.required]
  });


  constructor(private dataService: DataService, 
    private router: Router, 
    private fb: FormBuilder) { }

  removeItem(product:IProduct){ 
    this.dataService.removeProductFromCart(product);
    this.cart = this.dataService.getProductFromCart();   
  }

  emptyCart(){    
    this.dataService.removeAllProductFromCart(); 
    this.cart = this.dataService.getProductFromCart(); 
  }

  getTotal(){
    this.total = 0;
    this.cart = this.dataService.getProductFromCart();
    console.log("getTotal(), cart: ", this.cart);
    
    if(this.cart !== null) {
      for(let i = 0; i < this.cart.length; i++){
        let totalPrice = this.cart[i].product.price * this.cart[i].amount;
        console.log("Old total: ", this.total);
        
        this.total += totalPrice;
        console.log("New totalprice: ", this.total);
      }
    }
  }

  order(){
    const orderRows:IOrderRow[] = [];
    
    for(var i=0; i< this.cart.length; i++){
      orderRows.push({ProductId: this.cart[i].product.id, Amount: this.cart[i].amount});
    };

    this.orders = {
      id: 0, 
      companyId: 1,
      created: this.orderTime,
      createdBy: this.orderForm.get('emailAdress').value,
      paymentMethod: this.orderForm.get('paymentMethod').value,
      totalPrice: this.total,
      status: 0,
      orderRows: orderRows
    }
   
    this.dataService.checkoutOrders(this.orders).subscribe(
      response => {console.log(response);},
      err => {console.log(err.message);},
      ()=> {console.log('completed');}
    );
    
    localStorage.clear();
    this.router.navigate(['/complete']);
  }

  ngOnInit() {
    this.cart = this.dataService.getProductFromCart();
    console.log('Order component: ', this.cart);     
  }
}