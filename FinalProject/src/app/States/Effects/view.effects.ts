import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {ViewsService} from '../../Services/views.service'
import { ViewAction } from '../Actions/views.action'; 
import { Views, ViewsResponse } from '../../Models/Views';

@Injectable()
export class ViewsEffects {

  constructor(
    private actions$: Actions,
    private viewService:ViewsService 
  ) {}


  addView$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ViewAction.add),
      switchMap(({ newViews }) =>
        this.viewService.addViews(newViews).pipe(
          map((response: ViewsResponse) => ViewAction.addSuccess({ response })),
          catchError((error) => of(ViewAction.addFailure({ message: error.message })))
        )
      )
    )
  );


  getView$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ViewAction.get),
      switchMap(({ ViewId }) =>
        this.viewService.getView(ViewId).pipe(
          map((view: Views) => ViewAction.getSuccess({ view })),
          catchError((error) => of(ViewAction.getFailure({ message: error.message })))
        )
      )
    )
  );

  
  getViews$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ViewAction.getViews),
      switchMap(() =>
        this.viewService.getViews().pipe(
          map((views: Views[]) => ViewAction.getViewsSuccess({ view: views })),
          catchError((error) => of(ViewAction.getViewsFailure({ message: error.message })))
        )
      )
    )
  );

  
  updateView$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ViewAction.update),
      switchMap(({ updatedPlls }) =>
        this.viewService.updateViews(updatedPlls).pipe(
          map((response: ViewsResponse) => ViewAction.updateViewsSuccess({ response })),
          catchError((error) => of(ViewAction.updateViewsfailure({ message: error.message })))
        )
      )
    )
  );

 
  deleteView$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ViewAction.delete),
      switchMap(({ PollsId }) =>
        this.viewService.deleteViews(PollsId).pipe(
          map(() => ViewAction.deleteViewsSuccess({ ViewsId: PollsId })),
          catchError((error) => of(ViewAction.deleteViewsFailure({ message: error.message })))
        )
      )
    )
  );

 
  getUserViews$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ViewAction.getView),
        switchMap(() =>
          this.viewService.getViews().pipe(
            map((views: Views[]) => ViewAction.getViewSuccess({ views })),
            catchError((error) => of(ViewAction.getViewFailure({ message: error.message })))
          )
        )
      )
    );
}