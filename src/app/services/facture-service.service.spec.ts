import { TestBed } from '@angular/core/testing';

import { FactureServiceService } from './facture-service.service';

describe('FactureServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FactureServiceService = TestBed.get(FactureServiceService);
    expect(service).toBeTruthy();
  });
});
