import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-commit-message',
  templateUrl: './commit-message.component.html',
  styleUrls: ['./commit-message.component.css']
})
export class CommitMessageComponent {

  @Input() message = ''
  @Output() copiedMessageEvent = new EventEmitter<any>();
  constructor() { }

  copied(): void {
    this.copiedMessageEvent.emit();
  }

}
