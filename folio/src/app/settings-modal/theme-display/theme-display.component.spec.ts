import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeDisplayComponent } from './theme-display.component';

describe('ThemeDisplayComponent', () => {
  let component: ThemeDisplayComponent;
  let fixture: ComponentFixture<ThemeDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
