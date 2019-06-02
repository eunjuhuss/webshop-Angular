import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { DataService } from '../services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { IProduct } from '../interfaces/iproduct';
import { MockDataService } from '../services/mock-data.service'
// import { of } from 'rxjs/observable/of';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ HttpClientModule, RouterTestingModule ]
    })
  .overrideComponent(HomeComponent, { set: { providers: [{ provide: DataService, useClass: MockDataService }]}}) 
  .compileComponents();

}));
  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should display all products", async(() => {
    expect(component.products.length).toBeGreaterThan(0);  
    expect(component.products.length).toEqual(3);
  }));

  it("should products sort by categories", async(() => {    
    expect(component.sortByCategories.length).toBe(1);
    component.filtredProducts[''];
    expect(component.filtredProducts.length).toBe(3);

  }));
});
