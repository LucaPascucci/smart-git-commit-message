import { Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-checkbox-field',
  templateUrl: './checkbox-field.component.html',
  styleUrls: ['./checkbox-field.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CheckboxFieldComponent),
    },
  ],
})
export class CheckboxFieldComponent
  implements OnInit, ControlValueAccessor, OnDestroy
{
  @Input() id: string = '';
  @Input() label: string = '';
  @Input() disabled: boolean = false;

  formControl = new FormControl(false);
  private onChange: Function | undefined;
  private onTouched: Function | undefined;
  subscription: Subscription | undefined;

  ngOnInit(): void {
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

  writeValue(value: boolean): void {
    this.formControl.setValue(value);
    if (this.onChange) {
      this.onChange(value);
    }
  }
}
