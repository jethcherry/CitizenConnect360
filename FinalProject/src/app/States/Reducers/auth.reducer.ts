import { createReducer, on } from '@ngrx/store';
import { AuthActions } from '../Actions/auth.action';
import { User } from '../../Models/Auth';

export interface AuthInterface {
  loginSuccessMessage: string;
  loginErrorMessage: string;
  loginLoading: boolean;
  registerSuccessMessage: string;
  registerErrorMessage: string;
  registerLoading: boolean;
  users: User[];
  currentUserRole: string | null; 
}

const initialState: AuthInterface = {
  loginSuccessMessage: '',
  loginErrorMessage: '',
  loginLoading: false,
  registerSuccessMessage: '',
  registerErrorMessage: '',
  registerLoading: false,
  users: [],
  currentUserRole: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state) => ({
    ...state,
    loginSuccessMessage: '',
    loginErrorMessage: '',
    loginLoading: true,
  })),
  on(AuthActions.loginSuccess, (state, action) => ({
    ...state,
    loginSuccessMessage: action.response.message,
    loginErrorMessage: '',
    loginLoading: false,
    currentUserRole: action.response.Role

    
  })),

  on(AuthActions.loginFailure, (state, { message }) => ({
    ...state,
    loginSuccessMessage: '',
    loginErrorMessage: message,
    loginLoading: false,
  })),
  on(AuthActions.register, (state) => ({
    ...state,
    registerSuccessMessage: '',
    registerErrorMessage: '',
    registerLoading: true,
  })),
  on(AuthActions.registerSuccess, (state, action) => ({
    ...state,
    registerSuccessMessage: action.response.message,
    registerErrorMessage: '',
    registerLoading: false,
  })),
  on(AuthActions.registerFailure, (state, { message }) => ({
    ...state,
    registerSuccessMessage: '',
    registerErrorMessage: message,
    registerLoading: false,
  })),
  on(AuthActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    users: users,
  })),
  on(AuthActions.approveUserSuccess, (state, { user }) => ({
    ...state,
    users: state.users.map(u => u.UserId === user.UserId ? user : u),
  }))
);
