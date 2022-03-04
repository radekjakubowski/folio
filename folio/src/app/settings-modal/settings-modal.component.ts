import { CustomThemeInterface } from './../models/custom-theme';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UtilitiesService } from './../utilities.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HolidaysService } from '../holidays.service';

@Component({
  selector: 'app-settings-modal',
  templateUrl: './settings-modal.component.html',
  styleUrls: ['./settings-modal.component.scss']
})
export class SettingsModalComponent implements OnInit {
  public currentLanguage: string;
  public currentTheme: string;
  public customTheme: CustomThemeInterface;

  constructor(private utilitiesService: UtilitiesService, private translateService: TranslateService, private router: Router, public holidaysService: HolidaysService) {}

  ngOnInit(): void {
    this.currentLanguage = localStorage.getItem('folio-lang') || 'pl';
    this.currentTheme = localStorage.getItem('folio-theme') || '';

    this.customTheme = this.utilitiesService.customTheme;
    this.utilitiesService.themeSubject.subscribe(theme => {
      this.currentTheme = theme;
      this.customTheme = null;
    });
  }

  public closeModal(): void {
    this.utilitiesService.isSettingsModalOpen = false;
  }

  public setLanguage(lang: string): void {
    localStorage.setItem('folio-lang', lang);
    this.currentLanguage = lang;
    this.reloadLanguage(lang);
  }

  public setTheme(theme: string): void {
    this.utilitiesService.setTheme(theme);
  }

  private reloadLanguage(language: string) {
    this.translateService.use(language);
    this.translateService.setDefaultLang(language);
    const prev = this.router.url;
    this.router.navigate(['/']).then(data => {
      this.router.navigate([prev]);
    });
  }

  public openCustomThemeModal() {
    this.closeModal();
    this.utilitiesService.isCustomThemeModalOpen = true;
  }
}
