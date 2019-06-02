import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IOrder } from '../interfaces/iorder';
import { IProduct } from '../interfaces/iproduct';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  orderDetails : IOrder;
  productName : IProduct[];

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) { }



  ngOnInit() {
    this.route.params.subscribe(params => {    //  Params      
      let id = params['id'];    
      this.getOrderDetails(id); 
      });     
  }
  
  getOrderDetails(id:number){
    this.dataService.getOrderDetails(id)
    .subscribe(detailProduct => {
      console.log(detailProduct);
      this.orderDetails = detailProduct;
      console.log(this.orderDetails.orderRows);
    });
     
    this.dataService.getData()
    .subscribe(data => {
      console.log(data);
      this.productName = data;
      console.log(this.productName); 
      } 
    ); 

//     let productName = this.productName;
//     for(let i = 0; i < productName.length; i++){
//       if(productName[i].id === this.orderDetails.id){
//         console.log(productName);         
//       }         
//  }

//  getProductNames(){
//   this.dataService.getData()
//   .subscribe(data => {
//     console.log(data);
//     this.productName = data;
//     console.log(this.productName);
//   }); 
// }
}
}
