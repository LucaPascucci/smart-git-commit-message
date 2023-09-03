import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxFieldComponent } from './checkbox-field/checkbox-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextFieldComponent } from './input-text-field/input-text-field.component';
import { CardComponent } from './card/card.component';
import { PopoverComponent } from './popover/popover.component';
import { PopoverDirective } from './directive/popover.directive';
import { NotificationComponent } from './notification/notification.component';
import { PopoverService } from './service/popover.service';
import { Overlay } from '@angular/cdk/overlay';

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
    PopoverDirective,
    PopoverComponent,
  ],
  providers: [Overlay, PopoverService],
})
export class CoreModule {}
