import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderComponent } from './order.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MockDataService } from '../services/mock-data.service';
import { DataService } from '../services/data.service';

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderComponent ],
      imports: [ HttpClientModule, RouterTestingModule ]
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
    expect(component).toBeTruthy();
  });

  it(`Should show user`, () => {   
    expect(component.orderMovies.length).toBe(2);
    expect(component.orderRows).toBeDefined();
  });



  it(`Should create orderRows`, () => {
    expect(component.orderRows).toBeDefined();
    expect(component.orderRows.length).toBe(0);
  });



});
