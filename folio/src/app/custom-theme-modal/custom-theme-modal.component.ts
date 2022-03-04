import { BrowserModule } from '@angular/platform-browser';
import { UtilitiesService } from './../utilities.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-theme-modal',
  templateUrl: './custom-theme-modal.component.html',
  styleUrls: ['./custom-theme-modal.component.scss']
})
export class CustomThemeModalComponent {
  main: string = '#FFFFFF';
  secondaryMain: string  = '#FFFFFF';
  cold: string  = '#FFFFFF';
  warm: string  = '#FFFFFF';

  constructor(private utilitiesService: UtilitiesService, private changeDetector: ChangeDetectorRef) {}

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
    const bgColorRgb = this.hexToRgbWithDarken(this.main);
    this.utilitiesService.setTheme('');
    document.documentElement.style.setProperty('--default-main', this.main);
    document.documentElement.style.setProperty('--default-secondary-main', this.secondaryMain);
    document.documentElement.style.setProperty('--default-cold', this.cold);
    document.documentElement.style.setProperty('--default-warm', bgColorRgb.toString());
    document.documentElement.style.setProperty('--default-highlight-bg', bgColorRgb);

    this.changeDetector.markForCheck();
  }

  exitModal() {
    this.utilitiesService.isCustomThemeModalOpen = false;
    this.utilitiesService.isSettingsModalOpen = true;
  }

  private hexToRgbWithDarken(hex: string) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    const rgb = result ? {
      r: parseInt(result[1], 16) - 20,
      g: parseInt(result[2], 16) - 20,
      b: parseInt(result[3], 16 - 20)
    } : null;

    return `(${rgb?.r}, ${rgb?.g}, ${rgb?.b})`
  }
}
