export interface IAdminOrder { 
    id: number; 
    companyId: number;
    created: string;
    createdBy: string;
    paymentMethod: string;
    totalPrice:number;
    status: number;
    orderRows: IAdminOrderRow[];
}

export interface IAdminOrderRow {
    productId: number;
    amount: number;
    id: number;
    product: string;
    orderId: number;
}
