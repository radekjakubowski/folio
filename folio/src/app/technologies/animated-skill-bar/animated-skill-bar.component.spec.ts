import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedSkillBarComponent } from './animated-skill-bar.component';

describe('AnimatedSkillBarComponent', () => {
  let component: AnimatedSkillBarComponent;
  let fixture: ComponentFixture<AnimatedSkillBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedSkillBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedSkillBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
