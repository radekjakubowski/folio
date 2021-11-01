import { UtilitiesService } from './utilities.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private colours: string[] = ['red', 'blue', 'orange'];
  public currentColour: string = '';
  title = 'Radosław Jakubowski';
  private duration: number = 0;

  constructor(public utilitiesService: UtilitiesService, private translateService: TranslateService) {
    this.translateService.setDefaultLang('pl');
    this.translateService.use(localStorage.getItem('folio-lang') || 'pl');
  }

  ngOnInit(): void {
    this.setTheme();

    interval(1000).subscribe(() => {
      this.duration++;
      this.utilitiesService.durationObservable.next(this.duration);
    });
  }

  private setTheme() {
    const theme = localStorage.getItem('folio-theme') || "";

    if (theme) {
      document.body.classList.add(theme);
    }
  }
}
