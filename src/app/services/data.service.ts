import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/iproduct';
import { IData } from '../interfaces/idata';

@Injectable({
  providedIn: 'root'
})
export class DataService implements IData{

  filmsUrl: string = 'https://medieinstitutet-wie-products.azurewebsites.net/api/products';
  
  constructor(private httpClient: HttpClient) { }

  getData(): Observable<IProduct[]> {  
    return  this.httpClient.get<IProduct[]>(this.filmsUrl); 
} 


 

errorHandler(error: HttpErrorResponse){
  return Observable.throw(error.message || "Server Error");
}

}
