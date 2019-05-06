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
  
  public product: IProduct;
  
  //inject
  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) { }
  // read parameter
 
  ngOnInit() {
    //paramMap (from url)    
    //hämta products id from home html
    this.route.params.subscribe(params => {    //  Params      
    const id = params['id'];
    this.getProductsDetails(id);    
    });
  }

  getProductsDetails(id){
    this.dataService.getMovie(id)
    .subscribe(detailProduct => {
      console.log(detailProduct);
      this.product = detailProduct
    }); 
   
  }

 
  
}
  
  
