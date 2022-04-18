import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-theme-display',
  templateUrl: './theme-display.component.html',
  styleUrls: ['./theme-display.component.scss']
})
export class ThemeDisplayComponent implements OnChanges {
  @Input()
  main: string = '#FFFFFF';

  @Input()
  secondary: string = '#FFFFFF';

  @Input()
  warm: string = '#FFFFFF';

  @Input()
  cold: string = '#FFFFFF';

  @Input()
  width: string;

  @Input()
  height: string;

  @Input()
  inThemeChoosing = false;

  public noInputParams = true;

  ngOnChanges(changes) {
    this.noInputParams = false;

    if (changes?.main?.currentValue === null) {
      this.noInputParams = true;
    }
  }
}
