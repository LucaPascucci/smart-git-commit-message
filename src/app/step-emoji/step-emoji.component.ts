import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-step-emoji',
  templateUrl: './step-emoji.component.html',
  styleUrls: ['./step-emoji.component.css'],
})
export class StepEmojiComponent implements OnInit, OnDestroy {
  @Output() showEmoji = new EventEmitter<boolean>();

  emojiFormGroup = this.fb.group({ emoji: [false] });

  subscriptions: Subscription[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.emojiFormGroup.valueChanges.subscribe((value) => {
        this.showEmoji.emit(value.emoji ?? false);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
