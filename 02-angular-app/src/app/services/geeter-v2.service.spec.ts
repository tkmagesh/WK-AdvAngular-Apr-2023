import { TestBed } from '@angular/core/testing';

import { GeeterV2Service } from './geeter-v2.service';

describe('GeeterV2Service', () => {
  let service: GeeterV2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeeterV2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
