import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CommitType } from '../model/commit-type';
import { CommitTypeService } from 'src/app/service/commit-type.service';

@Injectable({
  providedIn: 'root',
})
export class CommitMessageService {
  private readonly commitMessageSubject: BehaviorSubject<string> =
    new BehaviorSubject('');

  private taskId: string | undefined;
  private commitType: CommitType;
  private showEmoji: boolean = false;
  private message: string | undefined;

  constructor(private commitTypeService: CommitTypeService) {
    this.commitType = this.commitTypeService.getDefaultCommitType();
  }

  getCommitMessage(): Observable<string> {
    return this.commitMessageSubject.asObservable();
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
    if (!this.checkCommitMessageComponent()) {
      this.commitMessageSubject.next('');
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

  private checkCommitMessageComponent(): boolean {
    return (
      this.message != undefined &&
      this.message.length > 0 &&
      this.taskId != undefined &&
      this.taskId.length > 0 &&
      this.commitType !== CommitType.UNDEFINED
    );
  }
}
