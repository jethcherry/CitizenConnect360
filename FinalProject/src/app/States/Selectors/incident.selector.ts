import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IncidentInterface } from '../Reducers/Incidence.reducer'; 


const getIncidentState = createFeatureSelector<IncidentInterface>('incident');

export const selectAllIncidences = createSelector( getIncidentState,(state) => state.incident);
export const selectSelectedIncident = createSelector(getIncidentState,(state) => state.selectedIncident);
export const selectAddIncidentLoading = createSelector(getIncidentState,(state) => state.addIncidentLoading);
export const selectAddIncidentSuccess = createSelector(getIncidentState,(state) => state.addIncidentSuccess);

export const selectAddIncidentFailure = createSelector(
  getIncidentState,
  (state) => state.addIncidentFailure
);

export const selectGetIncidentLoading = createSelector(
  getIncidentState,
  (state) => state.getIncidentLoading
);

export const selectGetIncidentSuccess = createSelector(
  getIncidentState,
  (state) => state.getIncidentSuccess
);

export const selectGetIncidentFailure = createSelector(
  getIncidentState,
  (state) => state.getIncidentFailure
);

export const selectUpdateIncidentLoading = createSelector(
  getIncidentState,
  (state) => state.updateIncidentLoading
);

export const selectUpdateIncidentSuccess = createSelector(
  getIncidentState,
  (state) => state.updateIncidentSuccess
);

export const selectUpdateIncidentFailure = createSelector(
  getIncidentState,
  (state) => state.updateIncidentFailure
);

export const selectDeleteIncidentLoading = createSelector(
  getIncidentState,
  (state) => state.deleteIncidentLoading
);

export const selectDeleteIncidentSuccess = createSelector(
  getIncidentState,
  (state) => state.deleteIncidentSuccess
);

export const selectDeleteIncidentFailure = createSelector(
  getIncidentState,
  (state) => state.deleteIncidentFailure
);

export const selectGetUserIncidentLoading = createSelector(
  getIncidentState,
  (state) => state.getIncidentLoading
);

export const selectGetUserIncidentSuccess = createSelector(
  getIncidentState,
  (state) => state.getIncidentSuccess
);

export const selectGetUserIncidentFailure = createSelector(
  getIncidentState,
  (state) => state.getIncidentFailure
);
