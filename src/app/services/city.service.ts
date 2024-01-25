import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Region } from './stores.model';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  private selectedCitySubject: BehaviorSubject<Region> =
    new BehaviorSubject<Region>(Region.All);

  selectedCity$: Observable<Region> = this.selectedCitySubject.asObservable();

  setSelectedCity(selectedCity: Region): void {
    this.selectedCitySubject.next(selectedCity);
  }

  getSelectedCity(): Observable<Region> {
    return this.selectedCity$;
  }
}
