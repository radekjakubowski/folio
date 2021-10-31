import { UtilitiesService } from './../utilities.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-modal',
  templateUrl: './settings-modal.component.html',
  styleUrls: ['./settings-modal.component.scss']
})
export class SettingsModalComponent implements OnInit {
  public currentLanguage: string;

  constructor(private utilitiesService: UtilitiesService) { }

  ngOnInit(): void {
    this.currentLanguage = localStorage.getItem('folio-lang') || 'pl';
  }

  public closeModal(): void {
    this.utilitiesService.isSettingsModalOpen = false;
  }

  public setLanguage(lang: string): void {
    localStorage.setItem('folio-lang', lang);
    this.currentLanguage = lang;
    window.location.reload();
  }
}
