import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';
import { ICart } from '../interfaces/ICart';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // @Output() searchEvent = new EventEmitter<string>();
  public cart:ICart[] = [];
  // @Input() cart:ICart;
  // @Output() totalAmount = new EventEmitter<any>();

  // searchByQuery(query: string){
  //   this.searchEvent.emit(query);
  // }

  

  constructor(private dataService: DataService) { }
  
  emptyCart(){    
    this.dataService.removeAllProductFromCart();
    this.cart = this.dataService.getProductFromCart();   
  }


 

  ngOnInit() {
    let count = this.dataService.getProductFromCart();  
    let amount = 0;
    if(count){
      for(let i = 0; i < count.length; i++){
        let totalAmount = count[i].amount;
        amount += totalAmount;
        console.log(amount);

      }
    return amount;
    }
  }
}
