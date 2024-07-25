import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  private isLoggedIn = false;

  logout() {
    localStorage.clear();
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  showStatus(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      this.isLoggedIn = true;
      return true;
    }

    this.isLoggedIn = false;
    return false;
  }
}
