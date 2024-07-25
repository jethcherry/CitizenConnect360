import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PollAction } from '../Actions/polls.action'; 
import { PollsService } from '../../Services/polls.service'; 
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class PollEffects {
  constructor(private actions$: Actions, private pollService: PollsService) {}

  addPoll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PollAction.add),
      mergeMap(action =>
        this.pollService.addPoll(action.newPoll).pipe(
          map(response => PollAction.addSuccess({ response })),
          catchError(message => of(PollAction.addFailure({ message })))
        )
      )
    )
  );

  getPoll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PollAction.get),
      mergeMap(action =>
        this.pollService.getPoll(action.pollId).pipe(
          map(poll => PollAction.getSuccess({ poll })),
          catchError(message => of(PollAction.getFailure({ message })))
        )
      )
    )
  );

  getAllPolls$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PollAction.getAll),
      mergeMap(() =>
        this.pollService.getPolls().pipe(
          map(polls => PollAction.getAllSuccess({ polls })),
          catchError(message => of(PollAction.getAllFailure({ message })))
        )
      )
    )
  );

  updatePoll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PollAction.update),
      mergeMap(action =>
        this.pollService.updatePOll(action.updatedPoll).pipe(
          map(response => PollAction.updateSuccess({ response })),
          catchError(message => of(PollAction.updateFailure({ message })))
        )
      )
    )
  );

  deletePoll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PollAction.delete),
      mergeMap(action =>
        this.pollService.deletePoll(action.pollId).pipe(
          map(() => PollAction.deleteSuccess({ pollId: action.pollId })),
          catchError(message => of(PollAction.deleteFailure({ message })))
        )
      )
    )
  );

  
}
