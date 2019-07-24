import { TestBed } from '@angular/core/testing';

import { ServiceFormationService } from './service-formation.service';

describe('ServiceFormationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceFormationService = TestBed.get(ServiceFormationService);
    expect(service).toBeTruthy();
  });
});
