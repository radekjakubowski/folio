import { Router } from '@angular/router';
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

  constructor(private dataProvider: DataProviderService, public translateService: TranslateService, private router: Router) { }

  ngOnInit(): void {
  }

  public getCurrentExperienceStep(): ExperienceStep {
    return this.dataProvider.getExperienceSteps().find(step => step.monthTo === '')!;
  }

  public navigateToHobbies(): void {
    this.router.navigateByUrl('about/hobbies');
  }
}
