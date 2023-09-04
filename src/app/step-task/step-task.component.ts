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
  selector: 'app-step-task',
  templateUrl: './step-task.component.html',
  styleUrls: ['./step-task.component.css'],
})
export class StepTaskComponent implements OnInit, OnDestroy {
  @Input() placeholder: string = '';
  @Output() newTaskId: EventEmitter<string> = new EventEmitter<string>();

  taskFormGroup = this.fb.group({ task: [''] });

  subscriptions: Subscription[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.taskFormGroup.valueChanges.subscribe((value) => {
        this.newTaskId.emit(value.task ?? '');
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
