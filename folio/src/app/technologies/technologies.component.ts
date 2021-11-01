import { Technology } from './../models/technology';
import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../data-provider.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {
  public frameworks: Technology[] = [];
  public languages: Technology[] = [];

  constructor(private dataProviderService: DataProviderService) { }

  ngOnInit(): void {
    this.frameworks = this.dataProviderService.getFrameworks();
    this.languages = this.dataProviderService.getLanguages();
  }
}
