import { Component, OnDestroy, inject } from '@angular/core';
import { Products } from '../../services/stores.model';
import { PublisherService } from '../../services/publisher.service';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../services/order.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-basket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-basket.component.html',
  styleUrl: './shopping-basket.component.scss',
})
export class ShoppingBasketComponent implements OnDestroy {
  publisherService = inject(PublisherService);
  private listenForProductsSubscription!: Subscription;

  addedProducts: Products[] = [];
  total: number = 0;

  constructor(private orderService: OrderService) {
    this.loadCartFromLocalStorage(); // Load cart data from localStorage on component initialization
    this.listenForProductsSubscription = this.publisherService
      .listenForData()
      .subscribe((productToBeAdded) => {
        this.addedProduct(productToBeAdded);
      });

    // this.publisherService.listenForData().subscribe((data) => {
    //       this.addedProduct(data);
    //     });
  }
  // destroy connection once you leave stores
  ngOnDestroy(): void {
    
    if (this.listenForProductsSubscription) {
      this.listenForProductsSubscription.unsubscribe();
      console.log('destroy');
    }
  }

  // check if it is new store or not
  isNewStore(productToBeAdded: Products): boolean {
    const cartDataString = localStorage.getItem('cart');
    if (cartDataString) {
      let existingProducts = JSON.parse(cartDataString);
      if (existingProducts[0]) {
        if (existingProducts[0].storeId == productToBeAdded.storeId) {
          console.log('same store');
          return false;
        } else {
          console.log('not same store');
          return true;
        }
      }
    }
    return false;
  }

  // add products to cart
  addedProduct(selectedProduct: Products) {
    if (this.isNewStore(selectedProduct)) {
      localStorage.removeItem('cart');
      this.addedProducts = [];
      this.addedProducts.push(selectedProduct);
      this.saveCartToLocalStorage();
    } else {
    }
    const existingProduct = this.addedProducts.find(
      (product: Products): boolean => product.id === selectedProduct.id
    );

    if (existingProduct) {
      existingProduct.counter += 1;
    } else {
      selectedProduct.counter = 1;
      this.addedProducts.push(selectedProduct);
    }

    this.updateCartTotal();
    this.saveCartToLocalStorage(); // Save updated cart data to localStorage
  }

  removeProduct(index: number) {
    const removedProduct = this.addedProducts[index];

    if (removedProduct.counter > 1) {
      removedProduct.counter -= 1;
    } else {
      this.addedProducts.splice(index, 1);
    }

    this.updateCartTotal();
    this.saveCartToLocalStorage(); // Save updated cart data to localStorage
  }
  updateCartTotal() {
    this.total = this.addedProducts.reduce(
      (sum, product) => sum + product.price * product.counter,
      0
    );
    this.total = +this.total.toFixed(2);
  }

  loadCartFromLocalStorage() {
    const cartDataString = localStorage.getItem('cart');
    if (cartDataString) {
      this.addedProducts = JSON.parse(cartDataString);
      this.updateCartTotal();
    }
  }
  saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.addedProducts));
  }
  clearCart() {
    // Clear the cart
    this.addedProducts = [];
    this.total = 0;
    this.saveCartToLocalStorage(); // Save updated cart data to localStorage
  }
  getStoreId(product: Products) {
    return product.storeId;
  }

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
