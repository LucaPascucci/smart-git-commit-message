import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, timer } from 'rxjs';

@Injectable()
export class NotificationService {
  private notificationMessage: BehaviorSubject<string> =
    new BehaviorSubject<string>('');

  private hideNotificationTimer: Observable<any> = timer(3000);
  private hideNotificationTimerSubscription: Subscription | undefined;

  getNotificationMessage(): Observable<string> {
    return this.notificationMessage.asObservable();
  }

  showNotification(message: string): void {
    if (message.length > 0) {
      this.resetNotificationTimerSubscription();
      this.notificationMessage.next(message);
      this.startNotificationTimer();
    }
  }

  clearNotification(): void {
    this.resetNotificationTimerSubscription();
    this.notificationMessage.next('');
  }

  private resetNotificationTimerSubscription(): void {
    if (this.hideNotificationTimerSubscription) {
      this.hideNotificationTimerSubscription.unsubscribe();
    }
  }

  private startNotificationTimer(): void {
    this.hideNotificationTimerSubscription =
      this.hideNotificationTimer.subscribe(() =>
        this.notificationMessage.next('')
      );
  }
}
