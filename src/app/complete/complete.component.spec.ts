import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CompleteComponent } from './complete.component';
import { MockDataService } from '../services/mock-data.service';
import { DataService } from '../services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('CompleteComponent', () => {
  let component: CompleteComponent;
  let fixture: ComponentFixture<CompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteComponent ],
      imports: [ HttpClientModule, RouterTestingModule ]
    })
    .overrideComponent(CompleteComponent, { set: { providers: [{ provide: DataService, useClass: MockDataService }]}}) 
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
