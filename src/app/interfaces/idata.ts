import { Observable } from 'rxjs';
import { IProduct } from './iproduct';
import { ICategory } from './icategory';
import { ICart } from './icart';
import { IOrder } from './iorder';

export interface IData {
    getData(): Observable<IProduct[]>;
    getCategory(): Observable<ICategory[]>;
    getMovie(id: number): Observable<IProduct>;
    // getProductFromCart(): Observable<IProduct[]>; 
    // addProductToCart(product:IProduct);
    getProductFromCart();
    // removeProductFromCart(product);
    // removeAllProductFromCart():ICart[];
    // checkoutOrders(order: IOrder): Observable<IOrder>;
    getOrderData(): Observable<IOrder[]>;
    // deleteOrderByAdmin(id:number):Observable<IOrder[]>;
}
