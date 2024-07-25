import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private roleSubject = new BehaviorSubject<string>(''); 
  role$ = this.roleSubject.asObservable();

  setRole(role: string) {
    this.roleSubject.next(role);
  }

  getRole(): string {
    return this.roleSubject.value;
  }
}
