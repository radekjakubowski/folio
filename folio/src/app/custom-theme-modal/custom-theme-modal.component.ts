import { CustomThemeApplierService } from './../custom-theme-applier.service';
import { CustomThemeInterface } from './../models/custom-theme';
import { UtilitiesService } from './../utilities.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-theme-modal',
  templateUrl: './custom-theme-modal.component.html',
  styleUrls: ['./custom-theme-modal.component.scss']
})
export class CustomThemeModalComponent implements OnInit {
  main: string;
  secondaryMain: string;
  cold: string;
  warm: string;

  default = '#FFFFFF';

  constructor(private utilitiesService: UtilitiesService, private customThemeApplier: CustomThemeApplierService) {}

  ngOnInit(): void {
    const customTheme = this.utilitiesService.customTheme;

    if (customTheme) {
      this.main = customTheme.main;
      this.secondaryMain = customTheme.secondaryMain;
      this.cold = customTheme.cold;
      this.warm = customTheme.warm;
    }
  }

  setColor(color: string, value: string) {
    switch (color) {
      case 'main': {
        this.main = value;
        break;
      }
      case 'secondaryMain': {
        this.secondaryMain = value;
        break;
      }
      case 'cold': {
        this.cold = value;
        break;
      }
      case 'warm': {
        this.warm = value;
        break;
      }
    }
  }

  applyTheme() {
    const themeObj: CustomThemeInterface = {
      main: this.main,
      secondaryMain: this.secondaryMain,
      cold: this.cold,
      warm: this.warm,
    }

    this.customThemeApplier.applyTheme(themeObj);
  }

  exitModal() {
    this.utilitiesService.isCustomThemeModalOpen = false;
    this.utilitiesService.isSettingsModalOpen = true;
  }
}
