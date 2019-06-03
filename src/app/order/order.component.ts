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
  public cart:ICart[] = [];
  public total: number;
  public orderRows:IOrderRow[] = [];
  // to get only one order
  public orders:IOrder;
  public orderTime = moment().format('LLLL');

  orderForm = this.fb.group({
    emailAdress: ['', Validators.required],  
    paymentMethod: ['', Validators.required]
  });


  constructor(private dataService: DataService, private router: Router, private fb: FormBuilder) { }

  // getProducts() {
  //   this.dataService.getData()
  //   .subscribe(data => {
  //     this.products = data; 
  //     this.productAddedTocart = this.products;
  //   });
  // }
 

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
    if(this.cart.length !== null){
      for(let i = 0; i < this.cart.length; i++){
        let totalPrice = this.cart[i].total;
        this.total += totalPrice;
      }
      return this.total;
      }else{
      return this.cart = [];
    }
  }

  order(){    
     for(var i=0; i< this.cart.length; i++){
      this.orderRows.push({ProductId: this.cart[i].product.id, Amount: this.cart[i].amount});
    };

    this.orders = {
      id: 0, 
      companyId: 1,
      created: this.orderTime,
      createdBy: this.orderForm.get('emailAdress').value,
      paymentMethod: this.orderForm.get('paymentMethod').value,
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
    this.router.navigate(['/complete']);
  }

  ngOnInit() {
    this.cart = this.dataService.getProductFromCart();
    console.log(this.cart);     
  }
}