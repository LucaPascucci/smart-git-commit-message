import { Component, Input, OnInit } from '@angular/core';
import { CommitMessageService } from '../commit-message.service';
import { Step } from '../model/step';
import { CommitType } from '../model/commit-type';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css'],
})
export class StepComponent implements OnInit {
  stepMirror = Step;

  @Input() step: Step = Step.MESSAGE;

  constructor(private commitMessageService: CommitMessageService) {}

  ngOnInit(): void {}

  updateCommitType(commitType: CommitType): void {
    this.commitMessageService.updateCommitType(commitType);
  }

  updateMessage(message: string) {
    this.commitMessageService.updateMessage(message);
  }

  updateTaskId(taskId: string) {
    this.commitMessageService.updateTaskId(taskId);
  }

  updateShowEmoji(showEmoji: boolean) {
    this.commitMessageService.updateShowEmoji(showEmoji);
  }
}
