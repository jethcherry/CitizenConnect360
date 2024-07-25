import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthInterface } from "../Reducers/auth.reducer";

const authFeatureSelector = createFeatureSelector<AuthInterface>('auth');

export const errorSelector = createSelector(authFeatureSelector, (state) => state.loginErrorMessage);
export const loginSuccessSelector = createSelector(authFeatureSelector, (state) => state.loginSuccessMessage);
export const loginLoading = createSelector(authFeatureSelector, (state) => state.loginLoading);
export const registerError = createSelector(authFeatureSelector, (state) => state.registerErrorMessage);
export const registerSuccess = createSelector(authFeatureSelector, (state) => state.registerSuccessMessage);
export const registerLoading = createSelector(authFeatureSelector, (state) => state.registerLoading);
export const selectCurrentUserRole = createSelector(authFeatureSelector, (state) => state.currentUserRole);
  


export const usersSelector = createSelector(authFeatureSelector, (state) => state.users);
