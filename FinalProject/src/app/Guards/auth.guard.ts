import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router) {}

  canActivate(): boolean | Observable<boolean> {
    const token = localStorage.getItem('token');
    if (token) {
      return true; 
    } else {
      this.router.navigate(['/login']); 
      return false;
    }
  }
}
