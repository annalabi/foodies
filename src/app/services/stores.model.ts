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
