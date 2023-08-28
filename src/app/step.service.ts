import { Injectable } from '@angular/core';
import { Step } from './model/step';

@Injectable({
  providedIn: 'root',
})
export class StepService {

  private steps: Step[] = [
    Step.COMMIT_TYPE,
    Step.MESSAGE,
    Step.TASK,
    Step.EMOJI
  ];

  constructor() {}

  getSteps(): Step[] {
    return this.steps;
  }

}
