import { Component } from '@angular/core';
import { HeaderComponent } from "../../Citizen/header/header.component";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent,ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private router:Router){}

  logout(){
    this.router.navigate(['/login'])


  }

}
