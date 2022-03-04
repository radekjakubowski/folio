import { CustomThemeInterface } from './models/custom-theme';
import { CustomThemeApplierService } from './custom-theme-applier.service';
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

  constructor(
    public utilitiesService: UtilitiesService,
    private translateService: TranslateService,
    private holidaysService: HolidaysService,
    private customThemeApplierService: CustomThemeApplierService
  ) {
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
    const theme = localStorage.getItem('folio-theme') || '';
    const customTheme: CustomThemeInterface = JSON.parse(localStorage.getItem('folio-custom-theme') as string);

    if (customTheme && theme !== 'christmas') {
      this.utilitiesService.customTheme = customTheme;
      this.customThemeApplierService.applyTheme(customTheme);
    }

    if (theme !== 'christmas') {
      if (theme) {
        document.body.classList.add(theme);
        this.currentTheme = theme;
      }
    } else {
      localStorage.setItem('folio-theme', '');
      this.utilitiesService.setTheme('');
    }
  }

  private changeTheme(theme: string) {
    document.body.classList.remove(this.currentTheme);

    if (theme !== 'custom') {
      localStorage.removeItem('folio-custom-theme');

      this.customThemeApplierService.resetCustomColors();
    }

    if (theme) {
      document.body.classList.add(theme);
      this.currentTheme = theme;
    }
  }
}
