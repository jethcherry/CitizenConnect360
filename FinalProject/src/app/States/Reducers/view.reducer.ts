import { createReducer, on } from '@ngrx/store';
import { ViewAction } from '../Actions/views.action'; 
import { Views } from '../../Models/Views';

export interface ViewInterface {
  views: Views[];
  selectedView: Views | null;
  addViewSuccess: string;
  addViewFailure: string;
  addViewLoading: boolean;

  getViewSuccess: string;
  getViewFailure: string;
  getViewLoading: boolean;

  getAllViewsSuccess: string;
  getAllViewsFailure: string;
  getAllViewsLoading: boolean;

  updateViewSuccess: string;
  updateViewFailure: string;
  updateViewLoading: boolean;

  deleteViewSuccess: string;
  deleteViewFailure: string;
  deleteViewLoading: boolean;
}

const initialState: ViewInterface = {
  views: [],
  selectedView: null,
  addViewSuccess: '',
  addViewFailure: '',
  addViewLoading: false,

  getViewSuccess: '',
  getViewFailure: '',
  getViewLoading: false,

  getAllViewsSuccess: '',
  getAllViewsFailure: '',
  getAllViewsLoading: false,

  updateViewSuccess: '',
  updateViewFailure: '',
  updateViewLoading: false,

  deleteViewSuccess: '',
  deleteViewFailure: '',
  deleteViewLoading: false,
};

export const ViewReducer = createReducer(
  initialState,

  
  on(ViewAction.add, (state) => ({
    ...state,
    addViewSuccess: '',
    addViewFailure: '',
    addViewLoading: true
  })),
  on(ViewAction.addSuccess, (state, { response }) => ({
    ...state,
    addViewSuccess: response.message,
    addViewFailure: '',
    addViewLoading: false
  })),
  on(ViewAction.addFailure, (state, { message }) => ({
    ...state,
    addViewSuccess: '',
    addViewFailure: message,
    addViewLoading: false
  })),

  on(ViewAction.get, (state) => ({
    ...state,
    getViewSuccess: '',
    getViewFailure: '',
    getViewLoading: true
  })),
  on(ViewAction.getSuccess, (state, { view }) => ({
    ...state,
    selectedView: view,
    getViewSuccess: 'View fetched successfully',
    getViewFailure: '',
    getViewLoading: false
  })),
  on(ViewAction.getFailure, (state, { message }) => ({
    ...state,
    selectedView: null,
    getViewSuccess: '',
    getViewFailure: message,
    getViewLoading: false
  })),

  on(ViewAction.getViews, (state) => ({
    ...state,
    getAllViewsSuccess: '',
    getAllViewsFailure: '',
    getAllViewsLoading: true
  })),
  on(ViewAction.getViewsSuccess, (state, { view }) => ({
    ...state,
    views: view,
    getAllViewsSuccess: 'All views fetched successfully',
    getAllViewsFailure: '',
    getAllViewsLoading: false
  })),
  on(ViewAction.getViewsFailure, (state, { message }) => ({
    ...state,
    getAllViewsSuccess: '',
    getAllViewsFailure: message,
    getAllViewsLoading: false
  })),


  on(ViewAction.update, (state) => ({
    ...state,
    updateViewSuccess: '',
    updateViewFailure: '',
    updateViewLoading: true
  })),
  on(ViewAction.updateViewsSuccess, (state, { response }) => ({
    ...state,
    views: state.views.map(view =>
      view.ViewId === response.ViewId ? response : view
    ),
    updateViewSuccess: response.message,
    updateViewFailure: '',
    updateViewLoading: false
  })),
  on(ViewAction.updateViewsfailure, (state, { message }) => ({
    ...state,
    updateViewSuccess: '',
    updateViewFailure: message,
    updateViewLoading: false
  })),

  
  on(ViewAction.delete, (state) => ({
    ...state,
    deleteViewSuccess: '',
    deleteViewFailure: '',
    deleteViewLoading: true
  })),
  on(ViewAction.deleteViewsSuccess, (state, { ViewsId }) => ({
    ...state,
    views: state.views.filter(view => view.ViewId !== ViewsId),
    deleteViewSuccess: 'View deleted successfully',
    deleteViewFailure: '',
    deleteViewLoading: false
  })),
  on(ViewAction.deleteViewsFailure, (state, { message }) => ({
    ...state,
    deleteViewSuccess: '',
    deleteViewFailure: message,
    deleteViewLoading: false
  })),

  
  on(ViewAction.getView, (state) => ({
    ...state,
    getViewSuccess: '',
    getViewFailure: '',
    getViewLoading: true
  })),
  on(ViewAction.getViewSuccess, (state, { views }) => ({
    ...state,
    views,
    getViewSuccess: 'User views fetched successfully',
    getViewFailure: '',
    getViewLoading: false
  })),
  on(ViewAction.getViewFailure, (state, { message }) => ({
    ...state,
    getViewSuccess: '',
    getViewFailure: message,
    getViewLoading: false
  }))
);
