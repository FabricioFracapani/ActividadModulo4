import { TestBed } from '@angular/core/testing';

import { AprobadoService } from './aprobado.service';

describe('AprobadoService', () => {
  let service: AprobadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AprobadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
