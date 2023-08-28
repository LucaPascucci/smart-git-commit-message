import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-message-step',
  templateUrl: './message-step.component.html',
  styleUrls: ['./message-step.component.css']
})
export class MessageStepComponent implements OnInit, OnDestroy {

  @Input() placeholder: string = ''
  @Output() newCommitMessage = new EventEmitter<string>();

  messageFormGroup = this.fb.group({ message: [''] });

  subscription: Subscription | undefined;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
   this.subscription = this.messageFormGroup.valueChanges.subscribe(
      (value) => {
        this.newCommitMessage.emit(value.message ?? '')
      }
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
