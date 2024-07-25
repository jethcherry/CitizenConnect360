import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-government-official',
  standalone: true,
  imports: [DashboardComponent,CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './government-official.component.html',
  styleUrl: './government-official.component.css'
})
export class GovernmentOfficialComponent {
  
  users = [
    { name: 'Phil Foden', email: 'philfoden@gmail.com' },
    { name: 'Declan Rice', email: 'declanrice@gmail.com' },
  ];

  editUser(user: any) {
    console.log('Editing user:', user);
  }

  deleteUser(user: any) {
    
    console.log('Deleting user:', user);
  }

  approveUser(user: any) {
    
    console.log('Approving user:', user);
  }

}
