import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { StoreByCity } from './stores.model';

@Injectable({
  providedIn: 'root'
})
export class FamousStoresByCityService {
  http = inject(HttpClient)
  
  
  constructor() { }
  


  url:string= 'http://localhost:4200/assets/stores.json'
  
  getStores(): Observable<StoreByCity[]> {
    return this.http.get<StoreByCity[]>(this.url)
    .pipe(
      retry(1),
      catchError( error => throwError(()=>'Error 404: ${error}'))
    );
  }

}