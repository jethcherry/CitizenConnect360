import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GovernmentOfficialGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean | Observable<boolean> {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role'); 

    if (token && role === 'Government Official' ) {
      return true; 
    } else {
      this.router.navigate(['/login']); 
      return false;
    }
  }
}
