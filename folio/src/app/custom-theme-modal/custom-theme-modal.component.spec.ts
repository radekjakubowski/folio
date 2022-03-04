import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomThemeModalComponent } from './custom-theme-modal.component';

describe('CustomThemeModalComponent', () => {
  let component: CustomThemeModalComponent;
  let fixture: ComponentFixture<CustomThemeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomThemeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomThemeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
