import { ICategory } from "./category.model";

export interface IProducto {
    title: string,
    price: number,
    description: string,
    images: string[],
    category: ICategory,
    categoryId: number
}