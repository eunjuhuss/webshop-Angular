import { Observable } from 'rxjs';
import { IProduct } from './iproduct';

export interface IData {
    getData(): Observable<IProduct[]>;
}
