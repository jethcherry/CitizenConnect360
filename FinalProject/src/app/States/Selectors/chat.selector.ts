import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ChatState } from '../Reducers/chat.reducer';

export const selectChatState = createFeatureSelector<ChatState>('chat');

export const selectMessages = createSelector(
  selectChatState,
  (state: ChatState) => state.messages
);

export const selectBotReplies = createSelector(
  selectChatState,
  (state: ChatState) => state.botReplies
);
