export interface Store {
  id: number;
  name: string;
  category: FoodCategory;
  address: string;
  image: string;
  rating: Rating;
  deliveryTime: string;
  minConsumption: string;
  deliveryCost: string;
  products: Products[];
}

export interface Products {
  id: number;
  name: string;
  category: string;
  price: number;
}

export interface Rating {
  rate: number;
  count: number;
}

export interface FamousStore {
  id: number;
  name: string;
  category: string;
  address: string;
}

export const enum FoodCategory {
  FAST_FOOD = 'FAST_FOOD',
  ASIAN = 'ASIAN',
  DONUTS = 'DONUTS',
  SOUVLAKI = 'SOUVLAKI',
  PIZZA = 'PIZZA',
  COFFEE = 'COFFEE',
}
