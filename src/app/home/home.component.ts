import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../services/mock-data.service';
import { DataService } from '../services/data.service';
import { IProduct } from '../interfaces/iproduct';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public products = [];
  // public categorys = [];

  public filtredProducts = [];
  public productAddedTocart = [];

  constructor(private dataService: DataService) { }

  // findCategoryId(){
  //   this.dataService.getCategory()
  //   .subscribe(
  //     data => {this.categorys = data;
  //       console.log("Success: ", this.categorys);
  //     },
  //     err => {
  //       console.log("Error : "+ err);
  //     }     
  //   )
  // }


  displayAllProducts() {
    this.dataService.getData()
    .subscribe(data => {
      this.products = data;
      this.filtredProducts = this.products;
      this.productAddedTocart = this.products;
    });

  }

  sortByCategories(event) {
    console.log(event.target.id);
    //rensat alla producter    
    //to match the productCategoryId and catergoryId     
    
    //this.findCategoryId();   

    let sortById = this.products;
    //let categoryId = this.categorys;
   // to empty efter for loop
    this.filtredProducts=[];
    console.log(this.filtredProducts);

    for(let i = 0; i < sortById.length; i++){         
      let childArray = sortById[i].productCategory;        
      for(let j = 0; j < childArray.length; j++){
        console.log(childArray[j]);          
        if(event.target.id == childArray[j].categoryId){
          // for(let c = 0; c < categoryId.length; c++){
          //   if(categoryId[c].id === childArray[j].categoryId){
              this.filtredProducts.push(sortById[i]); 
              console.log(sortById[i]);
              console.log(event.target.id);                    
              }else {
                console.log("no mached films");         
              }         
          //   }         
          // }                      
        }    
      }       
    }

  addToCart(product:any){
      console.log(product);
      // this.productAddedTocart=this.dataService.getProductFromCart();
      this.dataService.getProductFromCart();
      if(this.productAddedTocart !== null)
      {        
        this.dataService.addProductToCart(product);        
        this.productAddedTocart.push(product);
        this.dataService.addProductToCart(this.productAddedTocart);  
      }
      
      
  }

  removeItem(product){
    this.dataService.removeProductFromCart(product);
  }

    
    // public counter : number = 0;
    
    // add(item){
    //   this.counter += 1;
    //   console.log(item);
    // }
    
    // delete(item){
    //   if (this.counter > 0){
    //     this.counter -= 1;
    //   }
      
    // }

    ngOnInit() {
      this.displayAllProducts();
      // this.sortByCategories(event);
      
    }

 

}
