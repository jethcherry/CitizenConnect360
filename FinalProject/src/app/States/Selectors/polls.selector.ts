import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PollsInterface } from '../Reducers/polls.reducer'; 

export const selectPollState = createFeatureSelector<PollsInterface>('polls');

export const selectAllPolls = createSelector(
  selectPollState,
  (state: PollsInterface) => state.polls
);

export const selectSelectedPoll = createSelector(
  selectPollState,
  (state: PollsInterface) => state.selectedPoll
);

export const selectAddPollSuccess = createSelector(
  selectPollState,
  (state: PollsInterface) => state.addPollSuccess
);

export const selectAddPollFailure = createSelector(
  selectPollState,
  (state: PollsInterface) => state.addPollFailure
);

export const selectAddPollLoading = createSelector(
  selectPollState,
  (state: PollsInterface) => state.addPollLoading
);

export const selectGetPollSuccess = createSelector(
  selectPollState,
  (state: PollsInterface) => state.getPollSuccess
);

export const selectGetPollFailure = createSelector(
  selectPollState,
  (state: PollsInterface) => state.getPollFailure
);

export const selectGetPollLoading = createSelector(
  selectPollState,
  (state: PollsInterface) => state.getPollLoading
);

export const selectGetAllPollsSuccess = createSelector(
  selectPollState,
  (state: PollsInterface) => state.getAllPollsSuccess
);

export const selectGetAllPollsFailure = createSelector(
  selectPollState,
  (state: PollsInterface) => state.getAllPollsFailure
);

export const selectGetAllPollsLoading = createSelector(
  selectPollState,
  (state:PollsInterface) => state.getAllPollsLoading
);

export const selectUpdatePollSuccess = createSelector(
  selectPollState,
  (state: PollsInterface) => state.updatePollSuccess
);

export const selectUpdatePollFailure = createSelector(
  selectPollState,
  (state: PollsInterface) => state.updatePollFailure
);

export const selectUpdatePollLoading = createSelector(
  selectPollState,
  (state: PollsInterface) => state.updatePollLoading
);

export const selectDeletePollSuccess = createSelector(
  selectPollState,
  (state:PollsInterface) => state.deletePollSuccess
);

export const selectDeletePollFailure = createSelector(
  selectPollState,
  (state:PollsInterface) => state.deletePollFailure
);

export const selectDeletePollLoading = createSelector(
  selectPollState,
  (state: PollsInterface) => state.deletePollLoading
);

export const selectGetUserPollsSuccess = createSelector(
  selectPollState,
  (state: PollsInterface) => state.getUserPollsSuccess
);

export const selectGetUserPollsFailure = createSelector(
  selectPollState,
  (state:PollsInterface) => state.getUserPollsFailure
);

export const selectGetUserPollsLoading = createSelector(
  selectPollState,
  (state: PollsInterface) => state.getUserPollsLoading
);
