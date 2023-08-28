import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-emoji-step',
  templateUrl: './emoji-step.component.html',
  styleUrls: ['./emoji-step.component.css']
})
export class EmojiStepComponent implements OnInit, OnDestroy {

  @Output() showEmoji = new EventEmitter<boolean>();

  emojiFormGroup = this.fb.group({ emoji: [false] });

  subscription: Subscription | undefined;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
   this.subscription = this.emojiFormGroup.valueChanges.subscribe(
      (value) => {
        this.showEmoji.emit(value.emoji ?? false)
      }
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
