import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { CommitMessageService } from './service/commit-message.service';
import { StepService } from './service/step.service';
import { Step } from './model/step';
import { ClipboardService, IClipboardResponse } from 'ngx-clipboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  steps: Step[] = [];
  commitMessage: string = '';
  commitMessageReady: boolean = false;
  copiedMessage: string = 'Commit message copied 🎉';
  showNotification: boolean = false;
  subscriptions: Subscription[] = [];

  hideNotificationTimer = timer(3000);
  hideNotificationTimerSubscription: Subscription | undefined;

  constructor(
    private commitMessageService: CommitMessageService,
    private stepService: StepService,
    private _clipboardService: ClipboardService
  ) {
    this.steps = this.stepService.getSteps();
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.commitMessageService
        .getCommitMessageSubject()
        .subscribe((message) => (this.commitMessage = message))
    );
    this.subscriptions.push(
      this.commitMessageService
        .getCommitMessageReadySubject()
        .subscribe((ready) => (this.commitMessageReady = ready))
    );

    this.subscriptions.push(
      this._clipboardService.copyResponse$.subscribe(
        (res: IClipboardResponse) => {
          if (res.isSuccess) {
            this.startNotification();
          }
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  private startNotification(): void {
    if (this.hideNotificationTimerSubscription) {
      this.hideNotificationTimerSubscription.unsubscribe();
    }
    this.showNotification = true;
    this.hideNotificationTimerSubscription =
      this.hideNotificationTimer.subscribe(
        () => (this.showNotification = false)
      );
  }
}
