import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IProduct } from '../interfaces/iproduct';

import { IData } from '../interfaces/idata';

import { ICategory } from '../interfaces/icategory';

import { ICart } from '../interfaces/ICart';



@Injectable({

  providedIn: 'root'

})

export class DataService implements IData{



  filmsUrl: string = 'https://medieinstitutet-wie-products.azurewebsites.net/api/products';

  categoryUrl: string = 'https://medieinstitutet-wie-products.azurewebsites.net/api/categories';

  // productsUrl: string = 'https://medieinstitutet-wie-products.azurewebsites.net/api/products/';



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







addProductToCart(product:IProduct){
  let cart: ICart[] = this.getProductFromCart();
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
      localStorage.setItem("ShoppingCart", JSON.stringify(cart));
    }
    else {    
      localStorage.setItem("ShoppingCart", JSON.stringify([{ product: product, amount: 1, total: product.price}]));
    }
  }











getProductFromCart(){  

  return JSON.parse(localStorage.getItem("ShoppingCart"));

}



removeProductFromCart(product){  

  let findProduct = this.getProductFromCart();  

  findProduct.splice(product, 1);

  this.addProductToCart(findProduct);

 }





removeAllProductFromCart(){  

  localStorage.removeItem("ShoppingCart"); 

}





errorHandler(error: HttpErrorResponse){

  return Observable.throw(error.message || "Server Error");

}



}