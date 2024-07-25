import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { AddUser, getUser, LoginResponse, RegisterResponse, User } from '../../Models/Auth';

export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    'Register': props<{ user: AddUser }>(),
    'Register Success': props<{ response: RegisterResponse }>(),
    'Register Failure': props<{ message: string }>(),

    'Login': props<{ user: getUser }>(),
    'Login Success': props<{ response: LoginResponse }>(),
    'Login Failure': props<{ message: string }>(),

    'Load Users': emptyProps(),
    'Load Users Success': props<{ users: User[] }>(),
    'Load Users Failure': props<{ message: string }>(),
    
    'Approve User': props<{ userId: string }>(),
    'Approve User Success': props<{ user: User }>(),
    'Approve User Failure': props<{ message: string }>(),
    
  }
});
