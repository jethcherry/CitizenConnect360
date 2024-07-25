import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Polls, PollResponse } from "../../Models/Polls";

export const PollAction = createActionGroup({
  source: 'Poll API',
  events: {
    'add': props<{ newPoll: Polls }>(),
    'add success': props<{ response: PollResponse }>(),
    'add failure': props<{ message: string }>(),

    'get': props<{ pollId: string }>(),
    'get success': props<{ poll: Polls }>(),
    'get failure': props<{ message: string }>(),

    'get all': emptyProps(),
    'get all success': props<{ polls: Polls[] }>(),
    'get all failure': props<{ message: string }>(),

    'update': props<{ updatedPoll: Polls }>(),
    'update success': props<{ response: PollResponse }>(),
    'update failure': props<{ message: string }>(),

    'delete': props<{ pollId: string }>(),
    'delete success': props<{ pollId: string }>(),
    'delete failure': props<{ message: string }>(),

    'get by user': props<{ userId: string }>(),
    'get by user success': props<{ polls: Polls[] }>(),
    'get by user failure': props<{ message: string }>(),
  }
});
