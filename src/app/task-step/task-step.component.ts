import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-step',
  templateUrl: './task-step.component.html',
  styleUrls: ['./task-step.component.css']
})
export class TaskStepComponent implements OnInit, OnDestroy {

  @Input() placeholder: string = ''
  @Output() newTaskId = new EventEmitter<string>();

  taskFormGroup = this.fb.group({ task: [''] });

  subscription: Subscription | undefined;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.subscription = this.taskFormGroup.valueChanges.subscribe(
      (value) => {
        this.newTaskId.emit(value.task ?? '')
      }
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
