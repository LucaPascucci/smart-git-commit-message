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
import { CoreModule } from './core/core.module';
import { StepTaskComponent } from './step-task/step-task.component';
import { StepCommitTypeComponent } from './step-commit-type/step-commit-type.component';
import { StepMessageComponent } from './step-message/step-message.component';
import { StepEmojiComponent } from './step-emoji/step-emoji.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CommitMessageComponent,
    StepComponent,
    StepTaskComponent,
    StepCommitTypeComponent,
    StepMessageComponent,
    StepEmojiComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, ClipboardModule, CoreModule],
  providers: [CommitMessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
