import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommitMessageService } from './service/commit-message.service';
import { StepService } from './service/step.service';
import { Step } from './model/step';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  steps: Step[] = [];
  commitMessage: string = '';
  commitMessageReady: boolean = false;
  copiedMessage: string = 'Commit message successfully copied';
  showNotification: boolean = false;
  subscriptions: Subscription[] = [];

  constructor(
    private commitMessageService: CommitMessageService,
    private stepService: StepService
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
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  copiedMessageEvent(): void {
    this.showNotification = true;
  }
}
