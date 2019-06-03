import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component'
import { RouterTestingModule } from '@angular/router/testing';
import { OrderComponent } from './order/order.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';



describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        ProductsDetailComponent,
        OrderComponent
      ],
      imports: [HttpClientModule, RouterTestingModule,ReactiveFormsModule, FormsModule ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
