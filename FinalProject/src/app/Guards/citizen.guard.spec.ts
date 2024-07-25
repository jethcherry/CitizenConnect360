import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { citizenGuard } from './citizen.guard';

describe('citizenGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => citizenGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
