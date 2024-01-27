import { Component, inject } from '@angular/core';
import { Products } from '../../services/stores.model';
import { PublisherService } from '../../services/publisher.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-basket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-basket.component.html',
  styleUrl: './shopping-basket.component.scss'
})
export class ShoppingBasketComponent {

  publisherService = inject(PublisherService);

  addedProducts: Products[] = [];
  total: number = 0;

  constructor(){
    this.publisherService.listenForData()
    .subscribe((data) => {
      this.addedProduct(data);
    })
  }

  addedProduct(selectedProduct: Products){
    this.addedProducts.push(selectedProduct)
    this.total += selectedProduct.price
    this.total = +this.total.toFixed(2)
  }

  removeProduct(index: number){
    this.total -= this.addedProducts[index].price
    this.addedProducts.splice(index,1)
    this.total = +this.total.toFixed(2)
  }

  // modal
  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }
  
  // for tests
  test(){
    console.log("hello")
    console.log(this.addedProducts)
  }

}
