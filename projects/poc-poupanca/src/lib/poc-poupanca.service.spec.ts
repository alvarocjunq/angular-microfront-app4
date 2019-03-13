import { TestBed } from '@angular/core/testing';

import { PocPoupancaService } from './poc-poupanca.service';

describe('PocPoupancaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PocPoupancaService = TestBed.get(PocPoupancaService);
    expect(service).toBeTruthy();
  });
});
