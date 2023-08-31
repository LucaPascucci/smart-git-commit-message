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

  createdMessage = '';

  copiedMessage = 'Commit message successfully copied';
  showNotification = false;
  subscription: Subscription | undefined;

  constructor(
    private commitMessageService: CommitMessageService,
    private stepService: StepService
  ) {
    this.steps = this.stepService.getSteps();
  }

  ngOnInit(): void {
    this.subscription = this.commitMessageService
      .getCommitMessageSubject()
      .subscribe((message) => (this.createdMessage = message));
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  copiedMessageEvent(): void {
    this.showNotification = true;
  }
}
