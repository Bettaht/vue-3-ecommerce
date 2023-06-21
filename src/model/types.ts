export interface Product {
    name: string;
    price: number;
    id: number;
    image: string
}

export interface Cartdetail {
    product: Product;
    quantity: number;
}

export interface Category {
    id: number;
    name: string;
}