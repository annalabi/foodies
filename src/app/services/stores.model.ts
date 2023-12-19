export interface Store {
    id: number;
    name: string;
    category: string;
    address: string;
    image: string;
    rating: Rating;
    products: Products[]
}

export interface Products {
    id: number;
    name: string;
    category: string;
    price: number;
}

export interface Rating {
    rate: number;
    count: number
}