import { TestBed } from '@angular/core/testing';

import { AbisoftPersonaService } from './abisoft-persona.service';

describe('AbisoftPersonaService', () => {
  let service: AbisoftPersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbisoftPersonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
