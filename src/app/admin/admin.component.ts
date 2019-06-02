import {  Component, OnInit } from '@angular/core';
import {  DataService } from '../services/data.service';
import {  IOrder, IOrderRow } from '../interfaces/iorder';
import {  IProduct } from '../interfaces/iproduct';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public orderDetails: IOrder[];
  public orderRows: IOrderRow[];
  
  
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getOrderData()
      .subscribe(orderList => {
          this.orderDetails = orderList;
          console.log(this.orderDetails);          
        },
        err => {
          console.log(err.message);
        },
        () => {
          console.log('completed');
        }
      );
  }





//   deleteOrder(id){   
//     let singleOrders = this.orderDetails;
//     console.log(singleOrders);
//     this.dataService.removeOrder(id).subscribe(data => {
//       for(var i = 0;i < singleOrders.length; i++) {
//         if(singleOrders[i].id == id) {
//           singleOrders.splice(i, 1);
//         }
//       }
//   });
// }

    
    //   let findProduct:ICart[] = this.getProductFromCart();
    //     for(let i = 0; i < findProduct.length; i++){
    //       if(findProduct[i].product.id === product.id){
    //         console.log(product);
    //         findProduct.splice(i, 1);      
    //       }         
   
    //     localStorage.setItem("ShoppingCart", JSON.stringify(findProduct));
    //   }
      
  }


