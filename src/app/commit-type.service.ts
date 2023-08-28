import { Injectable } from '@angular/core';
import { CommitType } from './model/commit-type';

@Injectable({
  providedIn: 'root'
})
export class CommitTypeService {

  private commitTypes: CommitType[] = [
    CommitType.FEATURE,
    CommitType.DOCUMENTATION,
    CommitType.FIX,
    CommitType.STYLE,
    CommitType.REFACTOR,
    CommitType.TEST,
    CommitType.CHORE,
    CommitType.BUILD,
    CommitType.PERFORMANCE,
  ];

  private defaultCommitType: CommitType = CommitType.UNDEFINED;

  constructor() { }

  getDefaultCommitType(): CommitType {
    return this.defaultCommitType;
  }

  getCommitTypes(): CommitType[] {
    return this.commitTypes;
  }
}
