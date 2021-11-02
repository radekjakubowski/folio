import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UtilitiesService } from './../utilities.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

@Component({
  selector: 'app-settings-modal',
  templateUrl: './settings-modal.component.html',
  styleUrls: ['./settings-modal.component.scss']
})
export class SettingsModalComponent implements OnInit {
  public currentLanguage: string;
  public currentTheme: string;

  constructor(private utilitiesService: UtilitiesService, private translateService: TranslateService, private router: Router) {
  }

  ngOnInit(): void {
    this.currentLanguage = localStorage.getItem('folio-lang') || 'pl';
    this.currentTheme = localStorage.getItem('folio-theme') || '';
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
    localStorage.setItem('folio-theme', theme);
    this.currentTheme = theme;
    this.utilitiesService.themeSubject.next(theme);
  }

  private reloadLanguage(language: string) {
    this.translateService.use(language);
    this.translateService.setDefaultLang(language);
    const prev = this.router.url;
    this.router.navigate(['/']).then(data => {
      this.router.navigate([prev]);
    });
  }
}
