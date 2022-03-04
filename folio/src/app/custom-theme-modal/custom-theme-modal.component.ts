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
    const bgColorRgb = this.lightenDarkenColor(this.main, -60);
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

  private lightenDarkenColor(col: string, amt: number) {
    var usePound = false;
    if ( col[0] == "#" ) {
        col = col.slice(1);
        usePound = true;
    }

    var num = parseInt(col,16);

    var r = (num >> 16) + amt;

    if ( r > 255 ) r = 255;
    else if  (r < 0) r = 0;

    var b = ((num >> 8) & 0x00FF) + amt;

    if ( b > 255 ) b = 255;
    else if  (b < 0) b = 0;

    var g = (num & 0x0000FF) + amt;

    if ( g > 255 ) g = 255;
    else if  ( g < 0 ) g = 0;

    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}
}
