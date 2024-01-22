import { Component, EventEmitter, Input, Output, SimpleChange, inject } from '@angular/core';
import { Products } from '../../services/stores.model';
import { PublisherService } from '../../services/publisher.service';
import { EmptyError } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-basket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-basket.component.html',
  styleUrl: './shopping-basket.component.scss'
})
export class ShoppingBasketComponent {

  // @Output() productEmitter = new EventEmitter();
  
  // addedProducts: Products[] = [{id: 1,name: "bfg",category: "strggging",price: 1}];

  // addedProduct(selectedProduct: Products){
  //   this.productEmitter.emit(selectedProduct);

  //   this.addedProducts.push(selectedProduct)
  //   this.addedProducts.push({id: 1,name: "bfg",category: "strggging",price: 1})
  // }

  

  
  publisherService = inject(PublisherService);

  addedProducts: Products[] = [];
  EmptyCart: boolean = true;
  total: number = 0;

  constructor(){
    this.publisherService.listenForData()
    .subscribe((data) => {
      this.addedProduct(data);
    })
  }

  addedProduct(selectedProduct: Products){
    this.addedProducts.push(selectedProduct)
    this.EmptyCart = false
    this.total += selectedProduct.price
    this.total = +this.total.toFixed(2)
  }

  removeProduct(removeProduct: Products){

  }


  ngOnChanges(changes: SimpleChange){
    if(this.addedProducts.length == 0){
      this.EmptyCart = true
    }
    else{
      this.EmptyCart = false
    }

  }

  
  // for tests
  test(){
    console.log("hello")
    console.log(this.addedProducts)
  }

}
