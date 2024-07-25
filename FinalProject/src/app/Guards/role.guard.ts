import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, take, catchError } from 'rxjs/operators';
import { AppState } from '../States'; // Adjust path as needed
import { selectCurrentUserRole } from '../States/Selectors/auth.selector'; // Adjust path as needed

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.select(selectCurrentUserRole).pipe(
      take(1),
      map(role => {
        if (role === 'government official') {
          this.router.navigate(['/government-dashboard']);
          return false;
        } else if (role === 'citizen') {
          this.router.navigate(['/citizen-dashboard']);
          return false;
        }
        return true;
      }),
      catchError(() => {
        this.router.navigate(['/login']);
        return of(false);
      })
    );
  }
}
