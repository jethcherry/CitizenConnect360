import { createReducer, on } from '@ngrx/store';
import { IncidentAction } from '../Actions/incident.action';
import { Incidence } from '../../Models/Incidence';

export interface IncidentInterface {
  incident: Incidence[];
  selectedIncident: Incidence | null;
  addIncidentSuccess: string;
  addIncidentFailure: string;
  addIncidentLoading: boolean;

  getIncidentSuccess: string;
  getIncidentFailure: string;
  getIncidentLoading: boolean;

  getAllIncidentsSuccess: string;
  getAllIncidentsFailure: string;
  getAllIncidentsLoading: boolean;

  updateIncidentSuccess: string;
  updateIncidentFailure: string;
  updateIncidentLoading: boolean;

  deleteIncidentSuccess: string;
  deleteIncidentFailure: string;
  deleteIncidentLoading: boolean;
}

const initialState: IncidentInterface = {
  incident: [],
  selectedIncident: null,
  addIncidentSuccess: '',
  addIncidentFailure: '',
  addIncidentLoading: false,

  getIncidentSuccess: '',
  getIncidentFailure: '',
  getIncidentLoading: false,

  getAllIncidentsSuccess: '',
  getAllIncidentsFailure: '',
  getAllIncidentsLoading: false,

  updateIncidentSuccess: '',
  updateIncidentFailure: '',
  updateIncidentLoading: false,

  deleteIncidentSuccess: '',
  deleteIncidentFailure: '',
  deleteIncidentLoading: false,
};

export const IncidentReducer = createReducer(
  initialState,

  // Add Incident Actions
  on(IncidentAction.add, (state) => ({
    ...state,
    addIncidentSuccess: '',
    addIncidentFailure: '',
    addIncidentLoading: true
  })),
  on(IncidentAction.addSuccess, (state, { response }) => ({
    ...state,
    incidences: [...state.incident, response],
    addIncidentSuccess: response.message,
    addIncidentFailure: '',
    addIncidentLoading: false
  })),
  on(IncidentAction.addFailure, (state, { message }) => ({
    ...state,
    addIncidentSuccess: '',
    addIncidentFailure: message,
    addIncidentLoading: false
  })),

  // Get Single Incident Actions
  on(IncidentAction.get, (state) => ({
    ...state,
    getIncidentSuccess: '',
    getIncidentFailure: '',
    getIncidentLoading: true
  })),
  on(IncidentAction.getSuccess, (state, { incidence }) => ({
    ...state,
    selectedIncident: incidence,
    getIncidentSuccess: 'Incident fetched successfully',
    getIncidentFailure: '',
    getIncidentLoading: false
  })),
  on(IncidentAction.getFailure, (state, { message }) => ({
    ...state,
    selectedIncident: null,
    getIncidentSuccess: '',
    getIncidentFailure: message,
    getIncidentLoading: false
  })),

  // Get All Incidents Actions
  on(IncidentAction.getAll, (state) => ({
    ...state,
    getAllIncidentsSuccess: '',
    getAllIncidentsFailure: '',
    getAllIncidentsLoading: true
  })),
  on(IncidentAction.getAllSuccess, (state, { incidences }) => ({
    ...state,
    incidences,
    getAllIncidentsSuccess: 'All incidents fetched successfully',
    getAllIncidentsFailure: '',
    getAllIncidentsLoading: false
  })),
  on(IncidentAction.getAllFailure, (state, { message }) => ({
    ...state,
    getAllIncidentsSuccess: '',
    getAllIncidentsFailure: message,
    getAllIncidentsLoading: false
  })),

  // Update Incident Actions
  on(IncidentAction.update, (state) => ({
    ...state,
    updateIncidentSuccess: '',
    updateIncidentFailure: '',
    updateIncidentLoading: true
  })),
  on(IncidentAction.updateSuccess, (state, { response }) => ({
    ...state,
    incidences: state.incident.map(incident =>
      incident.IncidenceId === response.IncidenceId ? response : incident
    ),
    updateIncidentSuccess: response.message,
    updateIncidentFailure: '',
    updateIncidentLoading: false
  })),
  on(IncidentAction.updateFailure, (state, { message }) => ({
    ...state,
    updateIncidentSuccess: '',
    updateIncidentFailure: message,
    updateIncidentLoading: false
  })),

  // Delete Incident Actions
  on(IncidentAction.delete, (state) => ({
    ...state,
    deleteIncidentSuccess: '',
    deleteIncidentFailure: '',
    deleteIncidentLoading: true
  })),
  on(IncidentAction.deleteSuccess, (state, { incidenceId }) => ({
    ...state,
    incidences: state.incident.filter(incident => incident.IncidenceId !== incidenceId),
    deleteIncidentSuccess: 'Incident deleted successfully',
    deleteIncidentFailure: '',
    deleteIncidentLoading: false
  })),
  on(IncidentAction.deleteFailure, (state, { message }) => ({
    ...state,
    deleteIncidentSuccess: '',
    deleteIncidentFailure: message,
    deleteIncidentLoading: false
  })),

  // Get User Incidents Actions
  on(IncidentAction.getUserIncident, (state) => ({
    ...state,
    getUserIncidentSuccess: '',
    getUserIncidentFailure: '',
    getUserIncidentLoading: true
  })),
  on(IncidentAction.getUserIncidentSuccess, (state, { incidences }) => ({
    ...state,
    incidences,
    getUserIncidentSuccess: 'User incidents fetched successfully',
    getUserIncidentFailure: '',
    getUserIncidentLoading: false
  })),
  on(IncidentAction.getUserIncidentFailure, (state, { message }) => ({
    ...state,
    getUserIncidentSuccess: '',
    getUserIncidentFailure: message,
    getUserIncidentLoading: false
  }))
);
