import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../services/mock-data.service';
import { DataService } from '../services/data.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public products = [];
  public categorys = [];

  constructor(private dataService: MockDataService) { }

  // fechAllProducts() {
  //   this.dataService.getData()
  //     .subscribe(data => this.actionFilms = data);
  //   console.log(this.actionFilms[0].id);
  // }

  Action() {
    
    
    //rensat alla producter    
    //to match the productCategoryId and catergoryId     
    this.dataService.getCategory()
      .subscribe(
        data => {this.categorys = data;
          console.log("Success: ", this.categorys);
        },
        err => {
          console.log("Error : "+ err);
        }     
      )
           
      let actionFilms = this.products;
      console.log(this.categorys[0].id)

      for(let i = 0; i < actionFilms.length; i++){
        this.products=[]; 
        console.log(actionFilms[i]);
        let childArray = actionFilms[i].productCategory;
        
        for(let j = 0; j < childArray.length; j++){
          console.log(childArray[j]);    
          console.log(childArray[j].categoryId);  

          if(this.categorys[0].id === childArray[j].categoryId) {
            this.products.push(actionFilms[i]);
           
          } 
         
       
      }
    
       
        // if(productCategoryId[i],productCategoryId[0].categoryId === checkingCategoryId[0].id) {
        //   this.products.push(productCategoryId[i]);
        // } 
      }
      
      
    }

  ngOnInit() {
    this.dataService.getData()
    .subscribe(data => this.products = data);
  }

}
