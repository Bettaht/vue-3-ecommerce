export interface Product {
    name: string;
    price: number;
    id: number;
}

export interface Cartdetail {
    productId: number;
    quantity: number;
}

export interface Category {
    id: number;
    name: string;
}