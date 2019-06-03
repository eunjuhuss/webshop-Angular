import { TestBed, async } from '@angular/core/testing';
import { MockDataService } from './mock-data.service';
import { HomeComponent } from '../home/home.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('MockDataService', () => {
  beforeEach(async(() => { TestBed.configureTestingModule({ declarations: [ HomeComponent ],imports: [HttpClientModule, RouterTestingModule] 
  }) .overrideComponent(HomeComponent, { set: { providers: [{ provide: DataService, useClass: MockDataService }]}}) .compileComponents(); })); 

  it('should be created', () => {
    const service: MockDataService = TestBed.get(MockDataService);
    expect(service).toBeTruthy();
  });

  it('should return fake products from mockdataservice', () => {
    const service: MockDataService = TestBed.get(MockDataService);
    expect(service.products.length).toBe(3);
    expect(service.products[0].id).toEqual(1); 
  });

});
