import { TestBed } from '@angular/core/testing';

import { ServiceNiveauService } from './service-niveau.service';

describe('ServiceNiveauService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceNiveauService = TestBed.get(ServiceNiveauService);
    expect(service).toBeTruthy();
  });
});
