import { TestBed } from '@angular/core/testing';

import { RacasService } from './racas.service';

describe('RacasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RacasService = TestBed.get(RacasService);
    expect(service).toBeTruthy();
  });
});
