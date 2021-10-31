import { UtilitiesService } from './../utilities.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-modal',
  templateUrl: './settings-modal.component.html',
  styleUrls: ['./settings-modal.component.scss']
})
export class SettingsModalComponent implements OnInit {
  public currentLanguage: string = 'pl';

  constructor(private utilitiesService: UtilitiesService) { }

  ngOnInit(): void {
  }

  public closeModal(): void {
    this.utilitiesService.isSettingsModalOpen = false;
  }

  public setLanguage(lang: string): void {
    this.currentLanguage = lang;
    //to implement
  }
}
