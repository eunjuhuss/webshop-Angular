import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/iproduct';
import { IData } from '../interfaces/idata';
import { ICategory } from '../interfaces/icategory';
import { ICart } from '../interfaces/ICart';
import { IOrder } from '../interfaces/iorder';

@Injectable({
  providedIn: 'root'
})

export class DataService implements IData{
 
 
 
  filmsUrl: string = 'https://medieinstitutet-wie-products.azurewebsites.net/api/products';
  categoryUrl: string = 'https://medieinstitutet-wie-products.azurewebsites.net/api/categories';
  orderUrl: string = 'https://medieinstitutet-wie-products.azurewebsites.net/api/orders';
 

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<IProduct[]>{  
    return this.httpClient.get<IProduct[]>(this.filmsUrl); 
  } 

  getCategory(): Observable<ICategory[]>{  
   return this.httpClient.get<ICategory[]>(this.categoryUrl); 
  } 

  getMovie(id: number): Observable<IProduct>{
    return this.httpClient.get<IProduct>(this.filmsUrl + '/'+ id); 
  }

  addProductToCart(product:IProduct): ICart[] {
    let cart: ICart[] = this.getProductFromCart();
    let addedProduct = false;
    if(cart != null) {
      for(let i = 0; i < cart.length; i++){
        if(cart[i].product.id === product.id){
          cart[i].amount++;       
          cart[i].total += cart[i].product.price;   
          addedProduct = true;          
        }         
      }    
      if(addedProduct === false) {
        cart.push({ product: product, amount: 1, total: product.price}); 
      }
        localStorage.setItem("ShoppingCart", JSON.stringify(cart));
      }
      else {    
        localStorage.setItem("ShoppingCart", JSON.stringify([{ product: product, amount: 1, total: product.price}]));
      }

      return cart;
    }

  getProductFromCart(): ICart[]{  
    if(!localStorage.getItem("ShoppingCart")){
      return [];    
    }else {
      return JSON.parse(localStorage.getItem("ShoppingCart")) || [];
    }
  }

  removeProductFromCart(product:IProduct):void{
    let findProduct:ICart[] = this.getProductFromCart();
      for(let i = 0; i < findProduct.length; i++){
        if(findProduct[i].product.id === product.id){
          console.log(product);
          findProduct.splice(i, 1);      
        }         
      }  
      localStorage.setItem("ShoppingCart", JSON.stringify(findProduct));
    }

  removeAllProductFromCart(): ICart[]{
    localStorage.removeItem("ShoppingCart"); 
    return this.getProductFromCart();
  }

  checkoutOrders(order: IOrder): Observable<IOrder>{
    return this.httpClient.post<IOrder>(this.orderUrl, order);
  }

  getOrderData():Observable<IOrder[]>{  
    return this.httpClient.get<IOrder[]>(this.orderUrl + '/?companyid=1'); 
  }
 
  getOrderDetails(id: number): Observable<IOrder>{
    return this.httpClient.get<IOrder>(this.orderUrl + '/'+ id);
  }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }
}