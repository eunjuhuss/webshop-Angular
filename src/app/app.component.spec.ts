import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component'
import { RouterTestingModule } from '@angular/router/testing';
import { OrderComponent } from './order/order.component'



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
      imports: [HttpClientModule, RouterTestingModule ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'eunju-webshop-project'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('eunju-webshop-project!');
  // });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('eunju-webshop-project!');
  // });

  // it('should toggle a value', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;

  //   expect(app.showProduct).toBeFalsy();
  //   app.toggleProduct();
  //   expect(app.showProduct).toBeTruthy();
  // });


});
