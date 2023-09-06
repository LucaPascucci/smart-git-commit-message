import { Component, OnDestroy } from '@angular/core';
import { NotificationService } from '../service/notification.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnDestroy {
  message: string = '';
  subscriptions: Subscription[] = [];

  constructor(private notificationService: NotificationService) {
    this.subscriptions.push(
      this.notificationService
        .getNotificationMessage()
        .subscribe((message) => (this.message = message))
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
