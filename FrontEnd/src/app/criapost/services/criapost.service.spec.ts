import { TestBed } from '@angular/core/testing';

import { CriapostService } from './criapost.service';

describe('CriapostService', () => {
  let service: CriapostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriapostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
