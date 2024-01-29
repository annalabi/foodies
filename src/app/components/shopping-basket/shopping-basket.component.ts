import { Component, inject } from '@angular/core';
import { Products } from '../../services/stores.model';
import { PublisherService } from '../../services/publisher.service';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../services/order.service';
import { Order } from '../../services/order.models';

@Component({
  selector: 'app-shopping-basket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-basket.component.html',
  styleUrl: './shopping-basket.component.scss',
})
export class ShoppingBasketComponent {
  publisherService = inject(PublisherService);

  addedProducts: Products[] = [];
  total: number = 0;

  constructor(private orderService: OrderService) {
    this.publisherService.listenForData().subscribe((data) => {
      this.addedProduct(data);
    });
  }

  addedProduct(selectedProduct: Products) {

    if(this.addedProducts.includes(selectedProduct) ){
      selectedProduct.counter += 1;
    }
    else{
      this.addedProducts.push(selectedProduct);
    }
    this.total += selectedProduct.price;
    this.total = +this.total.toFixed(2);
  }

  removeProduct(index: number){
    this.total -= this.addedProducts[index].price
    this.total = +this.total.toFixed(2)

    if(this.addedProducts[index].counter !== 1 ){
      this.addedProducts[index].counter -= 1
    }
    else{
      this.addedProducts.splice(index,1)
    }
    
  }

  // modal
  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
  checkout(): void {
    console.log('Checkout button clicked.');

    // Get user data
    const userDataString = sessionStorage.getItem('userData');
    console.log('User Data:', userDataString);
    let userData: { email: any };
    // Check if userDataString is not null

    if (userDataString !== null) {
      userData = JSON.parse(userDataString);
      console.log('User Data:', userData);
      console.log('Added Products:', this.addedProducts);

      // Check if userData is not null
      if (userData !== null) {
        // Place order using OrderService
        this.orderService
          .placeOrder({
            user: userData,
            items: this.addedProducts,
            total: this.total,
            orderId: '',
            email: '',
          })
          .subscribe((response) => {
            console.log(response);

            // Clear the cart after placing the order
            this.addedProducts = [];
            this.total = 0;
            console.log(
              'Session Storage after placing order:',
              sessionStorage.getItem('orders')
            );
          });
      } else {
        console.error('User data not found in sessionStorage');
      }
    }
  }

  // for tests
  test() {
    console.log('hello');
    console.log(this.addedProducts);
  }
}
