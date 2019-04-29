import {
  Component,
  OnInit
} from '@angular/core';
import {
  MockDataService
} from '../services/mock-data.service';
import {
  DataService
} from '../services/data.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public products = [];
  public actionFilms = [];

  constructor(private dataService: MockDataService) { }

  fechAllProducts() {
    this.dataService.getData()
      .subscribe(data => this.actionFilms = data);
    console.log(this.actionFilms[0].id);
  }

  Action() {
    console.log("test");
    this.products=[];
    
  }

  ngOnInit() {
    this.dataService.getData()
    .subscribe(data => this.products = data);
  }

}
