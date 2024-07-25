import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../States';
import { AuthActions } from '../../../States/Actions/auth.action';
import { usersSelector } from '../../../States/Selectors/auth.selector';
import { AuthInterface } from '../../../States/Reducers/auth.reducer';
import { User } from '../../../Models/Auth';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DashboardComponent],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]> = new Observable<User[]>(); // Ensure the observable is defined

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    // Dispatch an action to load users
    this.store.dispatch(AuthActions.loadUsers());

    // Select users from the store
    this.users$ = this.store.select(usersSelector);
  }

  editUser(user: User) {
    // Logic for editing a user
  }

  deleteUser(user: User) {
    // Logic for deleting a user
  }

  approveUser(user: User) {
    this.store.dispatch(AuthActions.approveUser({ userId: user.UserId }));
  }
}
