import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from './order.models';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private userOrders: Order[] = [];

  constructor() {}

  // Fetch order history for a specific user
  getUserOrderHistory(email: string): Observable<Order[]> {
    console.log('Fetching orders for user with email:', email);
    let ordersStr:string|null= sessionStorage.getItem("orders");
    let allOrders;
    if (ordersStr){
      allOrders = JSON.parse(ordersStr);

    } else{
      allOrders=[];
    }
    console.log ("...")
    console.log(allOrders)

    // Fetching orders based on user email
    const ordersForUser: Order[] = allOrders.filter(
      (order:any):boolean => order.user.email === email
    );
    console.log('Orders for user:', ordersForUser);
    return of(ordersForUser);
  }

  // Place a new order
  placeOrder(orderData: Order): Observable<any> {
    console.log('Placing order:', orderData);

    // Storing the order locally
    this.userOrders.push(orderData);
    console.log(
      'Session Storage after placing order:',
      sessionStorage.getItem('orders')
    );
    sessionStorage.setItem('orders', JSON.stringify(this.userOrders));
    return of({ success: true, message: 'Order placed successfully' });
  }
}
