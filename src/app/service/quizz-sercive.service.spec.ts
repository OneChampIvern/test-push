import { TestBed } from '@angular/core/testing';

import { QuizzSerciveService } from './quizz-sercive.service';

describe('QuizzSerciveService', () => {
  let service: QuizzSerciveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizzSerciveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
