import { Component, OnDestroy } from '@angular/core';
import { ClipboardService, IClipboardResponse } from 'ngx-clipboard';
import { Subscription } from 'rxjs';
import { NotificationService } from '../core/service/notification.service';
import { CommitMessageService } from '../service/commit-message.service';

@Component({
  selector: 'app-commit-message',
  templateUrl: './commit-message.component.html',
  styleUrls: ['./commit-message.component.css'],
})
export class CommitMessageComponent implements OnDestroy {
  message: string = '';

  subscriptions: Subscription[] = [];
  copiedMessage: string = 'Commit message copied 🎉';

  constructor(
    private _clipboardService: ClipboardService,
    private notificationService: NotificationService,
    private commitMessageService: CommitMessageService
  ) {
    this.subscriptions.push(
      this._clipboardService.copyResponse$.subscribe(
        (res: IClipboardResponse) => {
          if (res.isSuccess) {
            this.notificationService.showNotification(this.copiedMessage);
          }
        }
      )
    );

    this.subscriptions.push(
      this.commitMessageService
        .getCommitMessage()
        .subscribe((message: string) => (this.message = message))
    );
  }

  copyMessageToClipboard(): void {
    this._clipboardService.copy(this.message);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
