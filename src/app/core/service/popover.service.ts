import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class PopoverService {
  private state: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor() {}

  getState(): Observable<boolean> {
    return this.state.asObservable();
  }

  setState(value: boolean) {
    return this.state.next(value);
  }

  // getSubscrition(): Observable<boolean> {
  //   return this.subscrition;
  // }

  // setSubscrition(): void {
  //   this.subscrition.
  // }
}
