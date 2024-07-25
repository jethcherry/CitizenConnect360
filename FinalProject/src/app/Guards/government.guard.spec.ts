import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { governmentGuard } from './government.guard';

describe('governmentGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => governmentGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
