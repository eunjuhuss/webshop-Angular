import { IProduct } from './iproduct';

export interface ICart {
    product: IProduct,
    amount:number,
    total:number
}
