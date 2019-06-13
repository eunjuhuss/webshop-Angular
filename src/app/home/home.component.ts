import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../services/mock-data.service';
import { DataService } from '../services/data.service';
import { IProduct } from '../interfaces/iproduct';
import { ICart } from '../interfaces/icart';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public products = [];
  public filtredProducts = [];
  public productAddedTocart: ICart[] = [];
  public searchProducts: IProduct[];

  constructor(private dataService: DataService) { }

  displayAllProducts() {
    this.dataService.getData()
    .subscribe(data => {
      this.products = data;
      this.filtredProducts = this.products;
    });
  }

  sortByCategories(event:any) {
    let sortById = this.products;
    this.filtredProducts=[];
    console.log(this.filtredProducts);

    for(let i = 0; i < sortById.length; i++){         
      let childArray = sortById[i].productCategory;        
      for(let j = 0; j < childArray.length; j++){              
        if(event.target.id == childArray[j].categoryId){
              this.filtredProducts.push(sortById[i]);                 
              }else {
                console.log("no mached films");         
              }                           
        }    
      }       
    }

  addToCart(product:IProduct){
    this.productAddedTocart = this.dataService.addProductToCart(product);         
  }

  removeItem(product:IProduct){
    this.dataService.removeProductFromCart(product);
    this.productAddedTocart = this.dataService.getProductFromCart();
  }

  ngOnInit() {
    this.displayAllProducts(); 
  }
}