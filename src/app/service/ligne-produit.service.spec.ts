import { TestBed } from '@angular/core/testing';

import { LigneProduitService } from './ligne-produit.service';

describe('LigneProduitService', () => {
  let service: LigneProduitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LigneProduitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
