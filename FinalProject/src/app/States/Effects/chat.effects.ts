import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ChatService } from '../../Services/chat.service';
import { ChatActions } from '../Actions/chat.action';
import { mergeMap, map } from 'rxjs/operators';

@Injectable()
export class ChatEffects {

  sendMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChatActions.sendMessage),
      mergeMap(action => this.chatService.sendMessage(action.message)
        .pipe(
          map(response => ChatActions.messageSent({ response: response.response }))
        ))
    )
  );

  loadMessages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChatActions.loadMessages),
      mergeMap(() => {
        // Fetch messages logic here (if any)
        return []; // Replace with actual messages observable
      }),
      map(messages => ChatActions.messagesLoaded({ messages }))
    )
  );

  constructor(
    private actions$: Actions,
    private chatService: ChatService
  ) { }
}




