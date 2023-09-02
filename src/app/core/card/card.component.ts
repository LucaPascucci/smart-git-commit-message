import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  @Input() selected: boolean = false;

  openPopover: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
