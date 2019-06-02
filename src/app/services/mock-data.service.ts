import { Injectable } from '@angular/core';
import { IData } from '../interfaces/idata';
import { IProduct } from '../interfaces/iproduct';
import { Observable, of } from 'rxjs';
import { ICategory } from '../interfaces/icategory';
import { ICart } from '../interfaces/icart';
import { IOrder } from '../interfaces/iorder';

@Injectable({
  providedIn: 'root'
})
export class MockDataService implements IData{
  // getData(): Observable<IProduct[]> {
  //   throw new Error("Method not implemented.");
  // }
  item: ICart[] = [];
  orders: IOrder[] = [];
  products:IProduct[]=[{
    id:1,
    name:'first batman',
    description:'this is mock data',
    price:199,
    imageUrl:'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
    year:2008,
    added:'2016-01-05T00:00:00',
    productCategory:[{
      categoryId:5,
      category:null
    },
    {
      categoryId:6,
      category:null
    }]
  },{
    id:2,
    name:'second batman',
    description:'this is mock data',
    price:199,
    imageUrl:'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
    year:2008,
    added:'2016-01-05T00:00:00',
    productCategory:[{
      categoryId:5,
      category:null
    },
    {
      categoryId:6,
      category:null
    }]
  },{
    id:3,
    name:'third batman',
    description:'this is mock data',
    price:199,
    imageUrl:'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
    year:2008,
    added:'2016-01-05T00:00:00',
    productCategory:[{
      categoryId:6,
      category:null
    },
    {
      categoryId:6,
      category:null
    }]
  }];

  categorys:ICategory[]=[{
    id:5,
    name: "action"
  },{
    id:6,
    name: "thriller"
  }];

  localStorageItems:ICart[]=[{
    product: this.products[0],
    amount:100,
    total:1
  }];

  orderDataMock: IOrder[] = [
    {id:900, companyId:1, created:"2019-05-09T00:00:00", createdBy :"Eunjuhuss", paymentMethod:"internetbanking", totalPrice :100, status:0, orderRows :[{ProductId:79, Amount:3}]},
    {id:901, companyId:1, created:"2019-05-10T00:00:00", createdBy :"Eunjuhuss", paymentMethod:"card", totalPrice :200, status:0, orderRows :[{ProductId:80, Amount:3}]},
    {id:902, companyId:1, created:"2019-05-12T00:00:00", createdBy :"Eunjuhuss", paymentMethod:"card", totalPrice :300, status:0, orderRows :[{ProductId:81, Amount:3}]}
  ];
 
  getData():Observable<IProduct[]> {
    return of(this.products);
  }

  getCategory():Observable<ICategory[]> {
    return of(this.categorys);
  }
  getMovie(id: number): Observable<IProduct>{
    return of(this.products.find(x=>x.id===id));
  }

  addProductToCart(product:IProduct):void{
    let cart: ICart[] = this.localStorageItems;
    let addedProduct = false;
    if(cart != null) {
      for(let i = 0; i < cart.length; i++){
        if(cart[i].product.id === product.id){
          cart[i].amount++;       
          cart[i].total += cart[i].product.price;   addedProduct = true;          
        }         
      }    
      if(addedProduct === false) {
        cart.push({ product: product, amount: 1, total: product.price}); 
      }
    }
  
  }

  getProductFromCart() {  
    return this.item = this.localStorageItems;
  } 


  removeProductFromCart(cartItem:number){    
      for(let i = 0; i < this.item.length; i++){
        if(this.item[i].product.id === cartItem){
          this.item.splice(i, 1);      
        }         
      }  
      return this.item;
  }

 

  removeAllProductFromCart(): ICart[]{   
    return this.localStorageItems=[];
  }

  getOrderData():Observable<IOrder[]>{  
    return of(this.orderDataMock);
  }

  checkoutOrders(): Observable<IOrder[]>{
    return of(this.orderDataMock);
  }

  constructor() { }
}
