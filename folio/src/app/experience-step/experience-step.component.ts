import { Component, Input, OnInit } from '@angular/core';
import { ExperienceStep } from '../models/experience-step';

@Component({
  selector: 'app-experience-step',
  templateUrl: './experience-step.component.html',
  styleUrls: ['./experience-step.component.scss']
})
export class ExperienceStepComponent implements OnInit {
  @Input()
  public stepInfo: ExperienceStep;

  constructor() { }

  ngOnInit(): void {
  }
}
