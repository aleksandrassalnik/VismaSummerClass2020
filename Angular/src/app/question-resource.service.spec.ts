import { TestBed } from '@angular/core/testing';

import { QuestionResourceService } from './question-resource.service';

describe('RestServiceService', () => {
  let service: QuestionResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
