import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDetailComponent } from './products-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { IProduct } from '../interfaces/iproduct';
import { MockDataService } from '../services/mock-data.service'
import { DataService } from '../services/data.service';

describe('ProductsDetailComponent', () => {
  let component: ProductsDetailComponent;
  let fixture: ComponentFixture<ProductsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsDetailComponent ],
      imports: [ HttpClientModule, RouterTestingModule ]
    })
   
  .overrideComponent(ProductsDetailComponent, { set: { providers: [{ provide: DataService, useClass: MockDataService }]}}) 
  .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should return id', () => {
    component.getProductsDetails(2);
    expect(component.product).toBeDefined();
    expect(component.product.name).toBe('second batman');

  });

});
