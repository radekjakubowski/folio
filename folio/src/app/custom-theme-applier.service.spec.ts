import { TestBed } from '@angular/core/testing';

import { CustomThemeApplierService } from './custom-theme-applier.service';

describe('CustomThemeApplierService', () => {
  let service: CustomThemeApplierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomThemeApplierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
