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
  if(cart != null) {
    for(let i = 0; i< cart.length; i++){
      cart[i].amount++;
    }
    // cart.push({ product: product, amount: 1, total: 0});
    localStorage.setItem("ShoppingCart", JSON.stringify(cart));    
  }
  else {
    localStorage.setItem("ShoppingCart", JSON.stringify([{ product: product, amount: 1, total: 0}]));
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
