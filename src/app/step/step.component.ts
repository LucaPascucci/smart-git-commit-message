import { Component, Input } from '@angular/core';
import { CommitMessageService } from '../service/commit-message.service';
import { Step } from '../model/step';
import { CommitType } from '../model/commit-type';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css'],
})
export class StepComponent {
  stepMirror = Step;

  @Input() step: Step = Step.MESSAGE;

  constructor(private commitMessageService: CommitMessageService) {}

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
