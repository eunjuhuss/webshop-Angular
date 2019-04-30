import { Observable } from 'rxjs';
import { IProduct } from './iproduct';
import { ICategory } from './icategory';

export interface IData {
    getData(): Observable<IProduct[]>;
    getCategory(): Observable<ICategory[]>;
}
