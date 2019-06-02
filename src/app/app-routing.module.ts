import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
//router 1, importing pages that I created
import { HomeComponent } from './home/home.component';

import { OrderComponent } from './order/order.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { CompleteComponent } from './complete/complete.component'
import { AdminComponent } from './admin/admin.component';

import { OrderDetailsComponent } from './order-details/order-details.component';
// variable need to skriv ovanpå @Ngmodule
// router 2, routes라는 local variable에 넣고
const routes: Routes = [
  //1, default componant 열었을때 나오는 페이지, 마지막은 에러가 났을때
  // redirectTo Home if full url is empty
  { path: '', redirectTo:'/home', pathMatch: 'full'}, 
  { path: 'home', component: HomeComponent }, 
  { path: 'detail/:id', component: ProductsDetailComponent },  
  { path: 'order', component: OrderComponent }, 
  { path: 'complete', component: CompleteComponent },
  { path: 'admin', component: AdminComponent }, 
  { path: 'orderDetails/:id', component: OrderDetailsComponent },  
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  // router 3, export해준다
  exports: [RouterModule]
})
export class AppRoutingModule { }

// router 3, export해준다
export const routingComponents = [HomeComponent,OrderComponent,PageNotFoundComponent, ProductsDetailComponent, CompleteComponent, AdminComponent, OrderDetailsComponent ];

