import { Products } from './stores.model';

export interface Order {
  orderId: string;
  email: string;
  items: Products[];
  image:Products[];
  total: number;
  user: {
fullName: any;
     email: any;
  };
  
}
