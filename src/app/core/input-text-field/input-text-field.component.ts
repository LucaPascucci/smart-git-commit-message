import { Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-input-text-field',
  templateUrl: './input-text-field.component.html',
  styleUrls: ['./input-text-field.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputTextFieldComponent),
    },
  ],
})
export class InputTextFieldComponent
  implements OnInit, ControlValueAccessor, OnDestroy
{
  @Input() id: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;

  formControl = new FormControl('');
  private onChange: Function | undefined;
  private onTouched: Function | undefined;
  subscription: Subscription | undefined;

  ngOnInit() {
    this.subscription = this.formControl.valueChanges.subscribe((value) => {
      if (this.onChange) {
        this.onChange(value);
      }
    });
    this.setDisabledState(this.disabled);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.formControl.disable();
    } else {
      this.formControl.enable();
    }
  }

  writeValue(value: string): void {
    this.formControl.setValue(value);
    if (this.onChange) {
      this.onChange(value);
    }
  }
}
