import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';
import { ICart } from '../interfaces/ICart';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public cart:ICart[] = [];

  constructor(private dataService: DataService) { }
  
  emptyCart(){    
    this.dataService.removeAllProductFromCart();
    this.cart = this.dataService.getProductFromCart();   
  }

  ngOnInit() {

  }
}
