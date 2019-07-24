import { TestBed } from '@angular/core/testing';

import { ServiceCondidatService } from './service-condidat.service';

describe('ServiceCondidatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceCondidatService = TestBed.get(ServiceCondidatService);
    expect(service).toBeTruthy();
  });
});
