import { Component, Input, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-animated-skill-bar',
  templateUrl: './animated-skill-bar.component.html',
  styleUrls: ['./animated-skill-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimatedSkillBarComponent implements AfterViewInit {
  @Input()
  public width = 100;

  @Input()
  public skillLevel = 0;

  public value = 0;
  public valueText = '';

  private readonly maxLevel = 100;

  constructor(private changeDetector: ChangeDetectorRef) {
  }


  public parseToStyleString(value: number, unit: string): string {
    return `${value}${unit}`;
  }

  ngAfterViewInit(): void {
    this.animateSkillBar();
  }

  public async animateSkillBar() {
    const timer = ms => new Promise(res => setTimeout(res, ms));

    while (this.value < this.skillLevel) {
      this.value++;

      await timer(20);

      this.changeDetector.markForCheck();
    }

    if (this.value === this.skillLevel) {
      this.valueText = `${this.value}/${this.maxLevel}`;
      this.changeDetector.markForCheck();
    }
  }
}
