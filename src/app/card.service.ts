import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { FamousStore } from './services/stores.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {
 
  http = inject(HttpClient)
  
  
  constructor() { }
  


  url:string= 'http://localhost:4200/assets/most_famous_stores_in_general.json'
  
  getTop10Stores(): Observable<FamousStore[]> {
    return this.http.get<FamousStore[]>(this.url)
    .pipe(
      retry(1),
      catchError( error => throwError(()=>'Error 404: ${error}'))
    );
  }
}

