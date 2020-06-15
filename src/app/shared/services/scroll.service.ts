import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  isPastScrollPosition = new BehaviorSubject<boolean>(false);

  constructor() { }

  setIsPastScrollPosition(value: boolean) {
    this.isPastScrollPosition.next(value);
  }
}
