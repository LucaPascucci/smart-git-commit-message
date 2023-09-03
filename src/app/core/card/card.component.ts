import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  //TODO: modificare il popover con gli eventi del mouse
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  @Input() selected: boolean = false;

  openPopover: boolean = false;
}
