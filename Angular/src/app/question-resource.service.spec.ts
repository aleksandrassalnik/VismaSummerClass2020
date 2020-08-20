import { TestBed } from '@angular/core/testing';

import { Providers } from './question-resource.service';

describe('RestServiceService', () => {
  let service: Providers;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Providers);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
