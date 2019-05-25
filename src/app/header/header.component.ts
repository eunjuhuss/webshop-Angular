import { Component, OnInit, Input, Output } from '@angular/core';
import { DataService } from '../services/data.service';
import { ICart } from '../interfaces/ICart';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @Input() cart:ICart;
  // @Output() totalAmount = new EventEmitter<any>();
  constructor(private dataService: DataService) { }
  
  emptyCart(){    
    this.dataService.removeAllProductFromCart();  
  }



  

 

  ngOnInit() {
    let count = this.dataService.getProductFromCart();  
    let amount = 0;
    for(let i = 0; i < count.length; i++){
      let totalAmount = count[i].amount;
      amount += totalAmount;
      console.log(amount);

    }
    return amount;
  }

}
