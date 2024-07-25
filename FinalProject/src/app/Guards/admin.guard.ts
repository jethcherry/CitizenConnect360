import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  private readonly ADMIN_EMAIL = 'jethrosumbeiywet@gmail.com';

  constructor(private router: Router) {}

  canActivate(): boolean | Observable<boolean> {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email'); 
    const role = localStorage.getItem('role'); 

    if (token && email === this.ADMIN_EMAIL && role === 'Admin') {
      return true; 
    } else {
      this.router.navigate(['/login']); 
      return false;
    }
  }
}
