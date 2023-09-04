import { Component } from '@angular/core';
import { StepService } from './service/step.service';
import { Step } from './model/step';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //TODO: gestione delle stringhe internazionalizzate i18n
  steps: Step[] = [];

  constructor(private stepService: StepService) {
    this.steps = this.stepService.getSteps();
  }
}
