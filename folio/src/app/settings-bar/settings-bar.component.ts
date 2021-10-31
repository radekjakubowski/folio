import { UtilitiesService } from './../utilities.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-bar',
  templateUrl: './settings-bar.component.html',
  styleUrls: ['./settings-bar.component.scss']
})
export class SettingsBarComponent implements OnInit {
  constructor(private utilitiesService: UtilitiesService) { }

  ngOnInit(): void {
  }

  public determineHomeButtonVisibility(): boolean {
    return window.location.pathname === '/' ? false : true;
  }

  public navigateHome(): void {
    this.utilitiesService.navigateHome();
  }
}
