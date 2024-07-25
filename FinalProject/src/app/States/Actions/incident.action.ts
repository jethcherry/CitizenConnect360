// actions/incident.actions.ts
import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Incidence, IncidenceResponse } from "../../Models/Incidence";

export const IncidentAction = createActionGroup({
  source: 'Incident API',
  events: {
    'add': props<{ newIncidence: Incidence }>(),
    'add success': props<{ response: IncidenceResponse }>(),
    'add failure': props<{ message: string }>(),

    'get': props<{ incidenceId: string }>(),
    'get success': props<{ incidence: Incidence }>(),
    'get failure': props<{ message: string }>(),

    'get all': emptyProps(),
    'get all success': props<{ incidences: Incidence[] }>(),
    'get all failure': props<{ message: string }>(),

    'update': props<{ updatedIncidence: Incidence }>(),
    'update success': props<{ response: IncidenceResponse }>(),
    'update failure': props<{ message: string }>(),

    'delete': props<{ incidenceId: string }>(),
    'delete success': props<{ incidenceId: string }>(),
    'delete failure': props<{ message: string }>(),

    'get User Incident': props<{ userId: string }>(),
    'get User Incident success': props<{ incidences: Incidence[] }>(),
    'get User Incident failure': props<{ message: string }>(),
  }
});
