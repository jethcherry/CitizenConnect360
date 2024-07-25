import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { IncidentAction } from '../Actions/incident.action'; 
import { Incidence, IncidenceResponse } from '../../Models/Incidence';
import { IncidentService } from '../../Services/incident.service';


@Injectable()
export class IncidentEffects {

  constructor(
    private actions$: Actions,
    private incidentService: IncidentService
  ) {}

  
  addIncident$ = createEffect(() =>
    this.actions$.pipe(
      ofType(IncidentAction.add),
      mergeMap(({ newIncidence }) =>
        this.incidentService.addIncident(newIncidence).pipe(
          map((response: IncidenceResponse) => IncidentAction.addSuccess({ response })),
          catchError((error) => of(IncidentAction.addFailure({ message: error.message })))
        )
      )
    )
  );

 
  getIncident$ = createEffect(() =>
    this.actions$.pipe(
      ofType(IncidentAction.get),
      mergeMap(({ incidenceId }) =>
        this.incidentService.getIncident(incidenceId).pipe(
          map((incidence: Incidence) => IncidentAction.getSuccess({ incidence })),
          catchError((error) => of(IncidentAction.getFailure({ message: error.message })))
        )
      )
    )
  );

  getAllIncidents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(IncidentAction.getAll),
      mergeMap(() =>
        this.incidentService.getAllIncidents().pipe(
          map((incidences: Incidence[]) => IncidentAction.getAllSuccess({ incidences })),
          catchError((error) => of(IncidentAction.getAllFailure({ message: error.message })))
        )
      )
    )
  );

  updateIncident$ = createEffect(() =>
    this.actions$.pipe(
      ofType(IncidentAction.update),
      mergeMap(({ updatedIncidence }) =>
        this.incidentService.updateIncident(updatedIncidence).pipe(
          map((response: IncidenceResponse) => IncidentAction.updateSuccess({ response })),
          catchError((error) => of(IncidentAction.updateFailure({ message: error.message })))
        )
      )
    )
  );

 
  deleteIncident$ = createEffect(() =>
    this.actions$.pipe(
      ofType(IncidentAction.delete),
      mergeMap(({ incidenceId }) =>
        this.incidentService.deleteIncident(incidenceId).pipe(
          map(() => IncidentAction.deleteSuccess({ incidenceId })),
          catchError((error) => of(IncidentAction.deleteFailure({ message: error.message })))
        )
      )
    )
  );


}
