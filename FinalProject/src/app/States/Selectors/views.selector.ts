
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ViewInterface } from '../Reducers/view.reducer'; 

export const selectViewState = createFeatureSelector<ViewInterface>('views');


export const selectAllViews = createSelector(
  selectViewState,
  (state: ViewInterface) => state.views
);


export const selectSelectedView = createSelector(
  selectViewState,
  (state: ViewInterface) => state.selectedView
);

export const selectAddViewLoading = createSelector(
  selectViewState,
  (state: ViewInterface) => state.addViewLoading
);

export const selectAddViewSuccess = createSelector(
  selectViewState,
  (state: ViewInterface) => state.addViewSuccess
);

export const selectAddViewFailure = createSelector(
  selectViewState,
  (state: ViewInterface) => state.addViewFailure
);


export const selectGetViewLoading = createSelector(
  selectViewState,
  (state: ViewInterface) => state.getViewLoading
);


export const selectGetViewSuccess = createSelector(
  selectViewState,
  (state: ViewInterface) => state.getViewSuccess
);


export const selectGetViewFailure = createSelector(
  selectViewState,
  (state: ViewInterface) => state.getViewFailure
);


export const selectUpdateViewLoading = createSelector(
  selectViewState,
  (state: ViewInterface) => state.updateViewLoading
);


export const selectUpdateViewSuccess = createSelector(
  selectViewState,
  (state: ViewInterface) => state.updateViewSuccess
);


export const selectUpdateViewFailure = createSelector(
  selectViewState,
  (state: ViewInterface) => state.updateViewFailure
);

export const selectDeleteViewLoading = createSelector(
  selectViewState,
  (state: ViewInterface) => state.deleteViewLoading
);

export const selectDeleteViewSuccess = createSelector(
  selectViewState,
  (state: ViewInterface) => state.deleteViewSuccess
);

export const selectDeleteViewFailure = createSelector(
  selectViewState,
  (state: ViewInterface) => state.deleteViewFailure
);
