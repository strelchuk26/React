import { ICategoryItem } from "../../categories/list/types";

export interface IProductItem {
    id: number;
    category_id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    category: ICategoryItem;
    product_images: IProductImage[];
}

export interface IProductImage {
    id: number;
    name: string;
}