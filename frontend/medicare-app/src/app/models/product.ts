import { Category } from "./category";

export interface Product {
    product: {};
    id: number;
    name: string;
    imageUrl: string;
    brand: string;
    description: string;
    isDiscontinued: boolean;
    price: number;
    category: Category;
    categoryId?: number;
}