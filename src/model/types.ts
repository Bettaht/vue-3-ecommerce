export interface Product {
    name: string;
    price: number;
    id: number;
    image: string;
    categoryId: number;
}

export interface Cartdetail {
    product: Product;
    quantity: number;
}

export interface Category {
    id: number;
    name: string;
    description: string;
}