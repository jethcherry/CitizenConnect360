import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../Services/auth.service';

@Component({
  selector: 'app-dashboard1',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './dashboard1.component.html',
  styleUrl: './dashboard1.component.css'
})
export class Dashboard1Component {
 
  constructor(public authService: AuthService, private router: Router) {}
  userRole: string | null = null;
  isMenuOpen = false;


  ngOnInit(): void {
    this.userRole = this.authService.getRole();
    console.log('User Role:', this.userRole); 
  }

  onLogOut(): void {
    this.authService.logout();
    this.router.navigate(['/login'])
  }

  
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

 

  
  closeMenu(): void {
    this.isMenuOpen = false;
  }

}
