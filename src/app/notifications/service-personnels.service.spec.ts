import { TestBed } from '@angular/core/testing';

import { ServicePersonnelsService } from './service-personnels.service';

describe('ServicePersonnelsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicePersonnelsService = TestBed.get(ServicePersonnelsService);
    expect(service).toBeTruthy();
  });
});
