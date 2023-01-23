import { ICategory } from "./category.model";

export interface IProducto {
    id: number;
    title: string,
    price: number,
    description: string,
    images: string[],
    category: ICategory,
    categoryId: number
}

export interface CreateProductDto extends Omit<IProducto, 'id'| 'category'>{
    categoryId:number;
};

export interface UpdateProductDto extends Partial<IProducto>{
    categoryId?:number;
};