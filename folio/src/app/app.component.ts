import { Router } from '@angular/router';
import { UtilitiesService } from './utilities.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { interval } from 'rxjs';
import { HolidaysService } from './holidays.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public currentColour: string = '';
  public currentTheme: string;
  title = 'Radosław Jakubowski';
  private duration: number = 0;

  constructor(public utilitiesService: UtilitiesService, private translateService: TranslateService, private holidaysService: HolidaysService, private router: Router) {
    this.translateService.setDefaultLang('pl');
    this.translateService.use(localStorage.getItem('folio-lang') || 'pl');
  }

  ngOnInit(): void {
    interval(1000).subscribe(() => {
      this.duration++;
      this.utilitiesService.durationObservable.next(this.duration);
    });

    this.utilitiesService.themeSubject.subscribe(theme => {
      this.changeTheme(theme);
    });

    if (this.holidaysService.isChristmasTime()) {
      this.setChristmasTheme();
    } else {
      this.setMemorizedTheme();
    }
  }

  private setChristmasTheme() {
      this.utilitiesService.setTheme('christmas');
  }

  private setMemorizedTheme() {
    const theme = localStorage.getItem('folio-theme') || "";

    if (theme !== 'christmas') {
      document.body.classList.add(theme);
      this.currentTheme = theme;
    } else {
      localStorage.setItem('folio-theme', '');
      this.utilitiesService.setTheme('');
    }
  }

  private changeTheme(theme: string) {
    document.body.classList.remove(this.currentTheme);

    if (theme) {
      document.body.classList.add(theme);
      this.currentTheme = theme;
    }
  }
}
