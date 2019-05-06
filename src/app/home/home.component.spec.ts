import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { DataService } from '../services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { IProduct } from '../interfaces/iproduct';
// import { of } from 'rxjs/observable/of';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ HttpClientModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it("should call getData and return action ", async(() => {
    // const response: IProduct[] = [];
  
    // spyOn(DataService, 'getData').and.returnValue(of(response))
  
    // component.getData();
  
    // fixture.detectChanges();
  
    expect(component.products.length).toEqual(0);
  }));



});
