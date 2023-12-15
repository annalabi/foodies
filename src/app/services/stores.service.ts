import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoresService {
  http = inject(HttpClient)
  
  
  constructor() { }
  


  url:string= 'https://fakestoreapi.com/products'
  
  getData() {
    return this.http.get(this.url)
    .pipe(
      retry(1),
      catchError( error => throwError(()=>'Error 404: ${error}'))
    );
  }

}
