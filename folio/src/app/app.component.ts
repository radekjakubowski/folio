import { UtilitiesService } from './utilities.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private colours: string[] = ['red', 'blue', 'orange'];
  public currentColour: string = '';
  title = 'Radosław Jakubowski';

  constructor(public utilitiesService: UtilitiesService, private translateService: TranslateService) {
    this.translateService.setDefaultLang('pl');
    this.translateService.use(localStorage.getItem('folio-lang') || 'pl');
  }

  ngOnInit(): void {
  }
}
