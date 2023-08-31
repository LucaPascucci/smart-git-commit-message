import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CommitType } from '../model/commit-type';
import { CommitTypeService } from 'src/app/service/commit-type.service';

@Injectable({
  providedIn: 'root',
})
export class CommitMessageService {
  private readonly commitMessageSubject: BehaviorSubject<string> =
    new BehaviorSubject('');

  private readonly commitMessageReadySubject: BehaviorSubject<boolean> =
    new BehaviorSubject(false);

  private taskId: string | undefined;
  private commitType: CommitType;
  private showEmoji: boolean = false;
  private message: string | undefined;
  private messageReady: boolean = false;

  constructor(private commitTypeService: CommitTypeService) {
    this.commitType = this.commitTypeService.getDefaultCommitType();
  }

  getCommitMessageSubject(): BehaviorSubject<string> {
    return this.commitMessageSubject;
  }

  getCommitMessageReadySubject(): BehaviorSubject<boolean> {
    return this.commitMessageReadySubject;
  }

  updateTaskId(taskId: string) {
    this.taskId = taskId;
    this.updateCommitMessageReadyToBeShowed();
    this.updateCommitMessage();
  }

  updateCommitType(commitType: CommitType) {
    this.commitType = commitType;
    this.updateCommitMessageReadyToBeShowed();
    this.updateCommitMessage();
  }

  updateShowEmoji(showEmoji: boolean) {
    this.showEmoji = showEmoji;
    this.updateCommitMessageReadyToBeShowed();
    this.updateCommitMessage();
  }

  updateMessage(message: string) {
    this.message = message;
    this.updateCommitMessageReadyToBeShowed();
    this.updateCommitMessage();
  }

  private updateCommitMessage() {
    if (!this.messageReady) {
      return;
    }
    let newMessage: string = '';
    if (this.showEmoji) {
      newMessage += CommitType.getEmoji(this.commitType) + ' ';
    }
    if (this.taskId && this.taskId.length > 0) {
      newMessage += '[' + this.taskId + '] ';
    }
    if (this.commitType !== CommitType.UNDEFINED) {
      newMessage += CommitType.toCommitPrefix(this.commitType) + ' ';
    }
    if (this.message && this.message.length > 0) {
      newMessage += this.message;
    }
    this.commitMessageSubject.next(newMessage);
  }

  private updateCommitMessageReadyToBeShowed() {
    this.messageReady =
      this.message != undefined &&
      this.taskId != undefined &&
      this.commitType !== CommitType.UNDEFINED;
    this.commitMessageReadySubject.next(this.messageReady);
  }
}
