import { Injectable } from '@angular/core';
import { IData } from '../interfaces/idata';
import { IProduct } from '../interfaces/iproduct';

import { Observable, of } from 'rxjs';
import { ICategory } from '../interfaces/icategory';

@Injectable({
  providedIn: 'root'
})
export class MockDataService implements IData{
  // getData(): Observable<IProduct[]> {
  //   throw new Error("Method not implemented.");
  // }
  products:IProduct[]=[{
    id:1,
    name:'name',
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
    name:'hi',
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
    name:'hi',
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
  }];


  categorys:ICategory[]=[{
    id:5,
    name: "action"
  },{
    id:6,
    name: "thriller"
  }];

  getData():Observable<IProduct[]> {
    return of(this.products);
  }

  getCategory():Observable<ICategory[]> {
    return of(this.categorys);
  }
  constructor() { }
}
