import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataProviderService } from '../data-provider.service';
import { ExperienceStep } from '../models/experience-step';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  public experienceSteps: ExperienceStep[];

  constructor(private dataProvider: DataProviderService) { }

  ngOnInit(): void {
    this.experienceSteps = this.dataProvider.getExperienceSteps();
  }

}
