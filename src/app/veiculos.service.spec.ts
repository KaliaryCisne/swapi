import { TestBed } from '@angular/core/testing';

import { VeiculosService } from './veiculos.service';

describe('VeiculosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VeiculosService = TestBed.get(VeiculosService);
    expect(service).toBeTruthy();
  });
});
