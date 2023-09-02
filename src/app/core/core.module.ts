import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxFieldComponent } from './checkbox-field/checkbox-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextFieldComponent } from './input-text-field/input-text-field.component';
import { CardComponent } from './card/card.component';
import { PopoverComponent } from './popover/popover.component';
import { PopoverDirective } from './directive/popover.directive';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    CheckboxFieldComponent,
    InputTextFieldComponent,
    CardComponent,
    PopoverComponent,
    PopoverDirective,
    NotificationComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    CheckboxFieldComponent,
    InputTextFieldComponent,
    CardComponent,
    NotificationComponent,
  ],
})
export class CoreModule {}
