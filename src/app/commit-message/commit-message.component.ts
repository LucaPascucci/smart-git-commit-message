import { Component, Input } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-commit-message',
  templateUrl: './commit-message.component.html',
  styleUrls: ['./commit-message.component.css'],
})
export class CommitMessageComponent {
  @Input() message: string = '';

  constructor(private _clipboardService: ClipboardService) {}

  copyMessageToClipboard(): void {
    this._clipboardService.copy(this.message);
  }
}
