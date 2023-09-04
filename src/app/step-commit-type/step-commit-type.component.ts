import { Component, EventEmitter, Output } from '@angular/core';
import { CommitType } from '../model/commit-type';
import { CommitTypeService } from '../service/commit-type.service';

@Component({
  selector: 'app-step-commit-type',
  templateUrl: './step-commit-type.component.html',
  styleUrls: ['./step-commit-type.component.css'],
})
export class StepCommitTypeComponent {
  commitType = CommitType;

  commitTypes: CommitType[] = [];
  activeCommitType: CommitType;

  @Output() selectedCommitType = new EventEmitter<CommitType>();

  constructor(private commitTypeService: CommitTypeService) {
    this.activeCommitType = this.commitTypeService.getDefaultCommitType();
    this.commitTypes = this.commitTypeService.getCommitTypes();
  }

  selectedType(commitType: CommitType): void {
    this.activeCommitType = commitType;
    this.selectedCommitType.emit(commitType);
  }
}
