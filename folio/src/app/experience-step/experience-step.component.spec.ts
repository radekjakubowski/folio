import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceStepComponent } from './experience-step.component';

describe('ExperienceStepComponent', () => {
  let component: ExperienceStepComponent;
  let fixture: ComponentFixture<ExperienceStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
