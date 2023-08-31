import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommitType } from '../model/commit-type';
import { CommitTypeService } from '../service/commit-type.service';

@Component({
  selector: 'app-commit-type-step',
  templateUrl: './commit-type-step.component.html',
  styleUrls: ['./commit-type-step.component.css'],
})
export class CommitTypeStepComponent implements OnInit {
  commitType = CommitType;

  commitTypes: CommitType[] = [];
  activeCommitType: CommitType;

  @Output() selectedCommitType = new EventEmitter<CommitType>();

  constructor(private commitTypeService: CommitTypeService) {
    this.activeCommitType = this.commitTypeService.getDefaultCommitType();
    this.commitTypes = this.commitTypeService.getCommitTypes();
  }

  ngOnInit(): void {}

  selectedType(commitType: CommitType): void {
    this.activeCommitType = commitType;
    this.selectedCommitType.emit(commitType);
  }
}
