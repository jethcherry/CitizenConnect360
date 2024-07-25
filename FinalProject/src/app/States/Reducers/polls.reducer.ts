import { createReducer, on } from '@ngrx/store';
import { PollAction } from '../Actions/polls.action' 
import { Polls } from '../../Models/Polls';

export interface PollsInterface {
  polls: Polls[];
  selectedPoll: Polls | null;
  addPollSuccess: string;
  addPollFailure: string;
  addPollLoading: boolean;

  getPollSuccess: string;
  getPollFailure: string;
  getPollLoading: boolean;

  getAllPollsSuccess: string;
  getAllPollsFailure: string;
  getAllPollsLoading: boolean;

  updatePollSuccess: string;
  updatePollFailure: string;
  updatePollLoading: boolean;

  deletePollSuccess: string;
  deletePollFailure: string;
  deletePollLoading: boolean;

  getUserPollsSuccess: string;
  getUserPollsFailure: string;
  getUserPollsLoading: boolean;
}

const initialState: PollsInterface = {
  polls: [],
  selectedPoll: null,
  addPollSuccess: '',
  addPollFailure: '',
  addPollLoading: false,

  getPollSuccess: '',
  getPollFailure: '',
  getPollLoading: false,

  getAllPollsSuccess: '',
  getAllPollsFailure: '',
  getAllPollsLoading: false,

  updatePollSuccess: '',
  updatePollFailure: '',
  updatePollLoading: false,

  deletePollSuccess: '',
  deletePollFailure: '',
  deletePollLoading: false,

  getUserPollsSuccess: '',
  getUserPollsFailure: '',
  getUserPollsLoading: false,
};

export const pollReducer = createReducer(
  initialState,

  
  on(PollAction.add, (state) => ({
    ...state,
    addPollSuccess: '',
    addPollFailure: '',
    addPollLoading: true
  })),
  on(PollAction.addSuccess, (state, { response }) => ({
    ...state,
    polls: [...state.polls, response],
    addPollSuccess: response.message,
    addPollFailure: '',
    addPollLoading: false
  })),
  on(PollAction.addFailure, (state, { message }) => ({
    ...state,
    addPollSuccess: '',
    addPollFailure: message,
    addPollLoading: false
  })),

  on(PollAction.get, (state) => ({
    ...state,
    getPollSuccess: '',
    getPollFailure: '',
    getPollLoading: true
  })),
  on(PollAction.getSuccess, (state, { poll }) => ({
    ...state,
    selectedPoll: poll,
    getPollSuccess: 'Poll fetched successfully',
    getPollFailure: '',
    getPollLoading: false
  })),
  on(PollAction.getFailure, (state, { message }) => ({
    ...state,
    selectedPoll: null,
    getPollSuccess: '',
    getPollFailure: message,
    getPollLoading: false
  })),

  
  on(PollAction.getAll, (state) => ({
    ...state,
    getAllPollsSuccess: '',
    getAllPollsFailure: '',
    getAllPollsLoading: true
  })),
  on(PollAction.getAllSuccess, (state, { polls }) => ({
    ...state,
    polls,
    getAllPollsSuccess: 'All polls fetched successfully',
    getAllPollsFailure: '',
    getAllPollsLoading: false
  })),
  on(PollAction.getAllFailure, (state, { message }) => ({
    ...state,
    getAllPollsSuccess: '',
    getAllPollsFailure: message,
    getAllPollsLoading: false
  })),

  on(PollAction.update, (state) => ({
    ...state,
    updatePollSuccess: '',
    updatePollFailure: '',
    updatePollLoading: true
  })),
  on(PollAction.updateSuccess, (state, { response }) => ({
    ...state,
    polls: state.polls.map(poll =>
      poll.PollId === response.PollId ? response : poll
    ),
    updatePollSuccess: response.message,
    updatePollFailure: '',
    updatePollLoading: false
  })),
  on(PollAction.updateFailure, (state, { message }) => ({
    ...state,
    updatePollSuccess: '',
    updatePollFailure: message,
    updatePollLoading: false
  })),

  // Delete Poll Actions
  on(PollAction.delete, (state) => ({
    ...state,
    deletePollSuccess: '',
    deletePollFailure: '',
    deletePollLoading: true
  })),
  on(PollAction.deleteSuccess, (state, { pollId }) => ({
    ...state,
    polls: state.polls.filter(poll => poll.PollId !== pollId),
    deletePollSuccess: 'Poll deleted successfully',
    deletePollFailure: '',
    deletePollLoading: false
  })),
  on(PollAction.deleteFailure, (state, { message }) => ({
    ...state,
    deletePollSuccess: '',
    deletePollFailure: message,
    deletePollLoading: false
  })),

  
  on(PollAction.getByUser, (state) => ({
    ...state,
    getUserPollsSuccess: '',
    getUserPollsFailure: '',
    getUserPollsLoading: true
  })),
  on(PollAction.getByUserSuccess, (state, { polls }) => ({
    ...state,
    polls,
    getUserPollsSuccess: 'User polls fetched successfully',
    getUserPollsFailure: '',
    getUserPollsLoading: false
  })),
  on(PollAction.getByUserFailure, (state, { message }) => ({
    ...state,
    getUserPollsSuccess: '',
    getUserPollsFailure: message,
    getUserPollsLoading: false
  }))
);
