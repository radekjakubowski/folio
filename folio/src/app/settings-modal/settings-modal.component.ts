import { UtilitiesService } from './../utilities.service';
import { Component, OnInit } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

@Component({
  selector: 'app-settings-modal',
  templateUrl: './settings-modal.component.html',
  styleUrls: ['./settings-modal.component.scss']
})
export class SettingsModalComponent implements OnInit {
  public currentLanguage: string;
  public currentTheme: string;

  constructor(private utilitiesService: UtilitiesService) { }

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
    window.location.reload();
  }

  public setTheme(theme: string): void {
    localStorage.setItem('folio-theme', theme);
    this.currentTheme = theme;
    window.location.reload();
  }
}
