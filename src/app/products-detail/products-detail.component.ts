import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MockDataService } from '../services/mock-data.service'
import { DataService } from '../services/data.service';
import { IProduct } from '../interfaces/iproduct';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
 
  public product: IProduct = {    
      id:null,
      name:'',
      description:'',
      price:null,
      imageUrl:'',
      year:null,
      added:'',
      productCategory:[{
        categoryId:null,
        category:null
      },
      {
        categoryId:null,
        category:null
      }]
    };

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) { }

  getProductsDetails(id:number){
    this.dataService.getMovie(id)
    .subscribe(detailProduct => {
      console.log(detailProduct);
      this.product = detailProduct;
    });    
  }

  
  addToCart(product:IProduct):void{
    this.dataService.addProductToCart(product);         
  }

  removeItem(product:IProduct):void{
    this.dataService.removeProductFromCart(product);
  }


  ngOnInit() {
    this.route.params.subscribe(params => { 
      let id = params['id'];    
      this.getProductsDetails(id); 
    });
  }


 
  
}
  

