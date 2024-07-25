import { createReducer, on } from '@ngrx/store';
import { ChatActions } from '../Actions/chat.action';

export interface ChatState {
  messages: any[];
  botReplies: any[];
}

export const initialState: ChatState = {
  messages: [],
  botReplies: []
};

export const chatReducer = createReducer(
  initialState,
  on(ChatActions.messageSent, (state, { response }) => ({
    ...state,
    botReplies: [...state.botReplies, { content: response }]
  })),
  on(ChatActions.messagesLoaded, (state, { messages }) => ({
    ...state,
    messages
  })),
  on(ChatActions.deleteMessage, (state, { messageId }) => ({
    ...state,
    messages: state.messages.filter(message => message.id !== messageId)
  }))
);
