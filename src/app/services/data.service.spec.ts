import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';

describe('DataService', () => {
  let service: DataService;
  
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
     HttpClientModule      
    ],
    providers: [DataService] 
  }));

  it('should be created', () => {
    service = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });

  it('should return an Observable<IProduct[]> ', () => {
    service = TestBed.get(DataService);
    service.getData().subscribe(data => expect(data.length).toBe(32));
    });

    it('should return an Observable<IProduct[]> ', () => {
      const service: DataService = TestBed.get(DataService);
      service.getCategory().subscribe(catergory => expect(catergory.length).toBe(4));
      });

});
