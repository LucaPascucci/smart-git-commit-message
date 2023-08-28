import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CommitType } from './model/commit-type';
import { CommitTypeService } from 'src/app/commit-type.service';

@Injectable({
  providedIn: 'root',
})
export class CommitMessageService {
  private readonly commitMessageSubject: BehaviorSubject<string> =
    new BehaviorSubject('');

  private taskId: string = '';
  private commitType: CommitType;
  private showEmoji: boolean = false;
  private message: string = '';

  constructor(private commitTypeService: CommitTypeService) {
    this.commitType = commitTypeService.getDefaultCommitType();
  }

  getCommitMessageSubject(): BehaviorSubject<string> {
    return this.commitMessageSubject;
  }

  updateTaskId(taskId: string) {
    this.taskId = taskId;
    this.updateCommitMessage();
  }

  updateCommitType(commitType: CommitType) {
    this.commitType = commitType;
    this.updateCommitMessage();
  }

  updateShowEmoji(showEmoji: boolean) {
    this.showEmoji = showEmoji;
    this.updateCommitMessage();
  }

  updateMessage(message: string) {
    this.message = message;
    this.updateCommitMessage();
  }

  private updateCommitMessage() {
    let newMessage: string = '';
    if (this.showEmoji) {
      newMessage += CommitType.getEmoji(this.commitType) + ' ';
    }
    if (this.taskId.length > 0) {
      newMessage += '[' + this.taskId + '] ';
    }
    if (this.commitType !== CommitType.UNDEFINED) {
      newMessage += CommitType.toCommitPrefix(this.commitType) + ' ';
    }
    if (this.message.length > 0) {
      newMessage += this.message;
    }
    this.commitMessageSubject.next(newMessage);
  }
}
