import { Component, Input, OnInit } from '@angular/core';
import { ExperienceStep } from '../models/experience-step';

@Component({
  selector: 'app-experience-step',
  templateUrl: './experience-step.component.html',
  styleUrls: ['./experience-step.component.scss']
})
export class ExperienceStepComponent implements OnInit {
  public isInFullExperience = false;

  @Input()
  public stepInfo: ExperienceStep;

  constructor() { }

  ngOnInit(): void {
    this.isInFullExperience = this.checkIfInFullExperience();
  }

  private checkIfInFullExperience(): boolean {
    return window.location.pathname === '/full-experience' ? true : false;
  }
}
