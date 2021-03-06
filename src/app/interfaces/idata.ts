import { Observable } from 'rxjs';
import { IProduct } from './iproduct';
import { ICategory } from './icategory';
import { ICart } from './icart';
import { IOrder } from './iorder';

export interface IData {
    getData(): Observable<IProduct[]>;
    getCategory(): Observable<ICategory[]>;
    getMovie(id: number): Observable<IProduct>;
    addProductToCart(product:IProduct);
    getProductFromCart(): ICart[];
    removeProductFromCart(product:IProduct):void;
    removeAllProductFromCart():ICart[];
    // checkoutOrders(order: IOrder): Observable<IOrder>;
    getOrderData():Observable<IOrder[]>;
    getOrderData(): Observable<IOrder[]>;
    getOrderDetails(id: number): Observable<IOrder>;
    
}
