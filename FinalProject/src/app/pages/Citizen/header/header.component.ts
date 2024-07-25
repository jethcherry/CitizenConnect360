import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';import { AuthService } from '../../../Services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../States';
import { Observable, Subscription } from 'rxjs';
import { selectCurrentUserRole } from '../../../States/Selectors/auth.selector';
 {}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  Role$: Observable<string | null> = this.store.select(selectCurrentUserRole);


  showStatus!: boolean;
  isMenuOpen = false;

  constructor(public authService: AuthService, private router: Router,private store:Store<AppState>) {
  ;
  }

  ngOnInit(): void {
    this.showStatus = this.authService.showStatus(); 
  }
 

  onLogOut(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}

