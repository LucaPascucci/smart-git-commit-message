import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-step-message',
  templateUrl: './step-message.component.html',
  styleUrls: ['./step-message.component.css'],
})
export class StepMessageComponent implements OnInit, OnDestroy {
  @Input() placeholder: string = '';
  @Output() newCommitMessage = new EventEmitter<string>();

  messageFormGroup = this.fb.group({ message: [''] });

  subscriptions: Subscription[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.messageFormGroup.valueChanges.subscribe((value) => {
        this.newCommitMessage.emit(value.message ?? '');
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
