import { IProduct } from "@/modules/products";

export interface ICart {
    product: IProduct;
    quantity: number;
}