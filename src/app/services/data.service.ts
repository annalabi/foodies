import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Products, Store } from './stores.model.js';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private http = inject(HttpClient);
  private storesJson = "../assets/sample-data/stores.json";
  private productsJson = "../assets/store.json";
  private endpoint = "../assets/storesJson";

  constructor() { }

  getStoreByName(name: string){
    return  this.http.get<Products[]>(this.endpoint + "/" + name + ".json");
  }

}
