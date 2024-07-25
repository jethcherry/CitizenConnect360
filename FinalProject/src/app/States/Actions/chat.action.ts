import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const ChatActions = createActionGroup({
  source: 'Chat',
  events: {
    'Send Message': props<{ message: string }>(),
    'Message Sent': props<{ response: string }>(),
    'Load Messages': emptyProps(),
    'Messages Loaded': props<{ messages: any[] }>(),
    'Delete Message': props<{ messageId: string }>(),
  }
});
