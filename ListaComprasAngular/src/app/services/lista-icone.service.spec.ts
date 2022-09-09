import { TestBed } from '@angular/core/testing';

import { ListaIconeService } from './lista-icone.service';

describe('ListaIconeService', () => {
  let service: ListaIconeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaIconeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
