import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

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

  public noInputParams = true;

  ngOnChanges() {
    this.noInputParams = false;
  }
}
