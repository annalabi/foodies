import { Products } from "./stores.model";

export interface Order {
    orderId: string;
    email: string;
    items: Products[];
    total: number; 
    user: {
        email: any;
      };
  }