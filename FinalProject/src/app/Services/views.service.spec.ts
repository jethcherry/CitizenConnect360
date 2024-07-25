import { TestBed } from '@angular/core/testing';

import { ViewsService } from './views.service';

describe('ViewsService', () => {
  let service: ViewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
