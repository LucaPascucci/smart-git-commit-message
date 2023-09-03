import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent {
  //TODO: creare il servizion per la gestione della notifica
  @Input() message: string = '';
  @Input() show: boolean = false;
}
