import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { OrderService } from '../services/order.service';
import { Order } from '../services/order.models';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.scss',
})
export class OrderHistoryComponent implements OnInit {
  userOrders$: Observable<Order[]> | undefined;
  orders: Order[] = [];

  constructor(private orderService: OrderService) {
    console.log('OrderService injected into OrderHistoryComponent');
  }

  ngOnInit(): void {
    console.log('OrderHistoryComponent initialized');
    const userDataString = sessionStorage.getItem('userData');

    if (userDataString) {
      const userData: { email: string } = JSON.parse(userDataString);
      console.log('User email:', userData);

      // Fetch user's order history from the service
      this.orderService
        .getUserOrderHistory(userData.email)
        .subscribe((orders) => {
          console.log('User Orders:', orders);
          this.userOrders$ = of(orders);

          console.log('User Orders Observable:', this.userOrders$);
          // Check the type and content of orders
          if (Array.isArray(orders)) {
            this.userOrders$ = of(orders);
          } else {
            console.error('Invalid orders data received:', orders);
          }
        });
    } else {
      console.error('User email not found in session storage');
    }
  }
}
