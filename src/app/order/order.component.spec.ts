import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderComponent } from './order.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MockDataService } from '../services/mock-data.service';
import { DataService } from '../services/data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderComponent ],
      imports: [ HttpClientModule, RouterTestingModule, FormsModule, ReactiveFormsModule ]
    })
    .overrideComponent(OrderComponent, { set: { providers: [{ provide: DataService, useClass: MockDataService }]}}) 
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log("cart1",component.cart);
    expect(component).toBeTruthy();
  });

  it('should remove a product from cart', () => {
    expect(component.cart.length).toBe(1);
    console.log("cart2",component.cart);
    component.removeItem({
      id:1,
      name:'first batman',
      description:'this is mock data',
      price:199,
      imageUrl:'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
      year:2008,
      added:'2016-01-05T00:00:00',
      productCategory:[{
        categoryId:5,
        category:null
      },
      {
        categoryId:6,
        category:null
      }]});
    expect(component.cart.length).toBe(0);
  });

  it('should remove all products from cart', () => {
    expect(component.cart.length).toBe(1);
    component.emptyCart();
    expect(component.cart.length).toBe(0);  
  });

  it('should calculate products total price', () => {
    expect(component.cart.length).toBe(1);
    console.log("Running test on total price");
    component.getTotal();
    expect(component.total).toBe(19900);  
  });
  
  it('should be invaild when form is empty', () => {
    expect(component.orderForm.valid).toBeFalsy(); 
  });

  it('should email field validity', () => {
    let email = component.orderForm.controls['emailAdress'];
    expect(email.valid).toBeFalsy(); 
  });
 
});





  
  


