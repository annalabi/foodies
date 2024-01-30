export interface Store {
  id: number;
  name: string;
  category: FoodCategory;
  address: string;
  image: string;
  rating: Rating;
  deliveryTime: number;
  minConsumption: number;
  deliveryCost: number;
  region: Region;
  products: Products[];
}

export interface StoreByCity {
  id: number;
  name: string;
  category: FoodCategory;
  address: string;
  image: string;
  rating: Rating;
  deliveryTime: number;
  minConsumption: number;
  deliveryCost: number;
  region: Region;
  products: Products[];
}

export interface Products {
  id: number;
  name: string;
  category: ProductCategory;
  price: number;
  counter: number;
  storeId: Store["id"];
}

export interface Rating {
  rate: number;
  count: number;
}

export interface FamousStore {
  id: number;
  name: string;
  category: FoodCategory;
  address: string;
  deliveryTime: number;
  minConsumption: number;
  rating: Rating;
}

export const enum FoodCategory {
  FAST_FOOD = 'FAST_FOOD',
  ASIAN = 'ASIAN',
  DONUTS = 'DONUTS',
  SOUVLAKI = 'SOUVLAKI',
  PIZZA = 'PIZZA',
  COFFEE = 'COFFEE',
  SWEETS = 'SWEETS',
  ITALIAN = 'ITALIAN',
  VEGAN = 'VEGAN',
  LEBANESE = 'LEBANESE',
  SEAFOOD = 'SEAFOOD',
  SALADS = 'SALADS',
  COCKTAILS = 'COCKTAILS',
}

export const enum Region {
  Athens = 'Athens',
  Thessaloniki = 'Thessaloniki',
  Kavala = 'Kavala',
  Ioannina = 'Ioannina',
  Patra = 'Patra',
  Lamia = 'Lamia',
  Larissa = 'Larissa',
  Chalkida = 'Chalkida',
  Serres = 'Serres',
  Volos = 'Volos',
  Rethymno = 'Rethymno',
  Heraklion = 'Heraklion',
  All = 'all',
}

export const enum ProductCategory {
  NOODLES = 'NOODLES',
  RICE = 'RICE',
  OTHER = 'OTHER',
  DONUT = 'DONUT',
  CRONUT = 'CRONUT',
  BURGER = 'BURGER',
  NUGGETS = 'NUGGETS',
  SALADS = 'SALADS',
  FRIES_AND_SIDES = 'FRIES_&_SIDES'
}
