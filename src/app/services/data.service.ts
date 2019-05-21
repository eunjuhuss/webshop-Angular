import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/iproduct';
import { IData } from '../interfaces/idata';
import { ICategory } from '../interfaces/icategory';

@Injectable({
  providedIn: 'root'
})
export class DataService implements IData{

  filmsUrl: string = 'https://medieinstitutet-wie-products.azurewebsites.net/api/products';
  categoryUrl: string = 'https://medieinstitutet-wie-products.azurewebsites.net/api/categories';
  // productsUrl: string = 'https://medieinstitutet-wie-products.azurewebsites.net/api/products/';

  constructor(private httpClient: HttpClient) { }


 

  getData(): Observable<IProduct[]> {  
    return this.httpClient.get<IProduct[]>(this.filmsUrl); 
 } 

 getCategory(): Observable<ICategory[]> {  
   return this.httpClient.get<ICategory[]>(this.categoryUrl); 
} 

getMovie(id: number): Observable<IProduct>{
  return this.httpClient.get<IProduct>(this.filmsUrl + '/'+ id); 
}



addProductToCart(product:any){
  localStorage.setItem("ShoppingCart", JSON.stringify(product));
}

getProductFromCart(){  
  return JSON.parse(localStorage.getItem("ShoppingCart"));
}

removeAllProductFromCart(){  
  localStorage.removeItem("ShoppingCart");
 
}

errorHandler(error: HttpErrorResponse){
  return Observable.throw(error.message || "Server Error");
}

}
