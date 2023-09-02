import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommitMessageComponent } from './commit-message/commit-message.component';
import { StepComponent } from './step/step.component';
import { CommitMessageService } from './service/commit-message.service';
import { CommitTypeStepComponent } from './commit-type-step/commit-type-step.component';
import { MessageStepComponent } from './message-step/message-step.component';
import { TaskStepComponent } from './task-step/task-step.component';
import { EmojiStepComponent } from './emoji-step/emoji-step.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CommitMessageComponent,
    StepComponent,
    CommitTypeStepComponent,
    MessageStepComponent,
    TaskStepComponent,
    EmojiStepComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, ClipboardModule, CoreModule],
  providers: [CommitMessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
