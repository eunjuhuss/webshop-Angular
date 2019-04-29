import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
     HttpClientModule      
    ]
  }));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });

  it('should return an Observable<IProduct[]> ', () => {
    const service: DataService = TestBed.get(DataService);
    service.getData().subscribe(data => expect(data.length).toBe(32));
    });



});
