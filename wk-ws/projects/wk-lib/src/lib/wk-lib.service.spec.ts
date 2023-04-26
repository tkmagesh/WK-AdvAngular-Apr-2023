import { TestBed } from '@angular/core/testing';

import { WkLibService } from './wk-lib.service';

describe('WkLibService', () => {
  let service: WkLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WkLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
