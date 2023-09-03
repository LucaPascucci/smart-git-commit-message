import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.css'],
})
export class PopoverComponent implements OnInit {
  @Input() text: string = '';

  elaboratedText: string = '';

  ngOnInit(): void {
    this.elaboratedText = this.text.replace('\n', '<br>');
  }
}
