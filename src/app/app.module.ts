import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { NotificationComponent } from './notification/notification.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { CheckboxFieldComponent } from './checkbox-field/checkbox-field.component';
import { CommitMessageComponent } from './commit-message/commit-message.component';
import { StepComponent } from './step/step.component';
import { CommitMessageService } from './commit-message.service';
import { CommitTypeStepComponent } from './commit-type-step/commit-type-step.component';
import { MessageStepComponent } from './message-step/message-step.component';
import { TaskStepComponent } from './task-step/task-step.component';
import { EmojiStepComponent } from './emoji-step/emoji-step.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    NotificationComponent,
    InputFieldComponent,
    CheckboxFieldComponent,
    CommitMessageComponent,
    StepComponent,
    CommitTypeStepComponent,
    MessageStepComponent,
    TaskStepComponent,
    EmojiStepComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, ClipboardModule],
  providers: [CommitMessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
