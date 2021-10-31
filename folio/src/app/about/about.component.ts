import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../data-provider.service';
import { ExperienceStep } from '../models/experience-step';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private dataProvider: DataProviderService, public translateService: TranslateService) { }

  ngOnInit(): void {
  }

  public getCurrentExperienceStep(): ExperienceStep {
    return this.dataProvider.getExperienceSteps().find(step => step.monthTo === '')!;
  }
}
