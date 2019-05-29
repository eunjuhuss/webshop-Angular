import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { DataService } from './services/data.service';
import { FormsModule } from '@angular/forms';
//router 4, 라우팅컴퍼넌트를 가지고온다
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { OrderComponent } from './order/order.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderComponent,
    PageNotFoundComponent,
 

  //router 5, 디클라래이션에 라우팅컴퍼넌트를 넣어준다
    routingComponents,
    ProductsDetailComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    FormsModule,
    
    
    
    
    HttpClientModule,
  //router 6, imports에 AppRoutingModule 를 넣어준다
    AppRoutingModule
    
  ],
  providers: [ DataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
