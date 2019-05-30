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
  // it takes a time to fetch a detail product from url, so need to use this empty object
 
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

  // private items: IProduct[] = [];
  // private total: number = 0;
  
  //inject
  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) { }
  // read parameter
 


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

  removeItem(product){
    this.dataService.removeProductFromCart(product);
  }

  // goPrev(){
  //   this.route.params.subscribe(params => {    //  Params      
  //   let id = params['id'];
  //   console.log(id-1);
    // this.getProductsDetails(id); 
    // let previousId = id -1;
    
    // this.getProductsDetails(previousId)
    // this.router.navigate(['/detail',id-1]);
   
    // });

    // let previousId = this.detailId -1;
    // this.router.navigate(['/details',previousId]);
 
  // }
 
//   goNext(){
//    let nextId = this.detailId +1;
//    this.router.navigate(['/details',nextId]);
//  }


  ngOnInit() {
    //paramMap (from url)    
    //hämta products id from home html
    this.route.params.subscribe(params => {    //  Params      
    let id = params['id'];    
    this.getProductsDetails(id); 
    });
  }


 
  
}
  

