import { UtilitiesService } from './utilities.service';
import { CustomThemeInterface } from './models/custom-theme';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomThemeApplierService {
  constructor(private utilitiesService: UtilitiesService) {}

  public applyTheme(customColors: CustomThemeInterface) {
    const bgColorHex = this.lightenDarkenColor(customColors.main, -30);

    if (!customColors.highlight) {
      customColors.highlight = bgColorHex;
    }

    this.utilitiesService.setTheme('');
    document.documentElement.style.setProperty('--default-main', customColors.main);
    document.documentElement.style.setProperty('--default-secondary-main', customColors.secondaryMain);
    document.documentElement.style.setProperty('--default-cold', customColors.cold);
    document.documentElement.style.setProperty('--default-warm', customColors.warm);
    document.documentElement.style.setProperty('--default-highlight-bg', bgColorHex);

    this.utilitiesService.setTheme('custom');
    this.utilitiesService.customTheme = customColors;
    localStorage.setItem('folio-custom-theme', JSON.stringify(customColors));
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

 public resetCustomColors() {
  document.documentElement.style.setProperty('--default-main', null);
  document.documentElement.style.setProperty('--default-secondary-main', null);
  document.documentElement.style.setProperty('--default-cold', null);
  document.documentElement.style.setProperty('--default-warm', null);
  document.documentElement.style.setProperty('--default-highlight-bg', null);
 }
}
