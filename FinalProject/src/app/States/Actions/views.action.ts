import { createActionGroup, emptyProps, props } from "@ngrx/store";

import {Views, ViewsResponse } from "../../Models/Views"
export const ViewAction = createActionGroup({
  source: 'Incident API',
  events: {
    'add': props<{ newViews:Views}>(),
    'add success': props<{ response:  ViewsResponse}>(),
    'add failure': props<{ message: string }>(),

    'get': props<{ ViewId: string }>(),
    'get success': props<{ view:Views }>(),
    'get failure': props<{ message: string }>(),

    'get views': emptyProps(),
    'get  views success': props<{ view: Views[] }>(),
    'get views failure': props<{ message: string }>(),

    'update': props<{ updatedPlls: Views }>(),
    'update views success': props<{ response:ViewsResponse }>(),
    'update viewsfailure': props<{ message: string }>(),

    'delete': props<{ PollsId: string }>(),
    'delete views success': props<{ ViewsId: string }>(),
    'delete views failure': props<{ message: string }>(),

    'get view': props<{ userId: string }>(),
    'get view success': props<{ views: Views[] }>(),
    'get view failure': props<{ message: string }>(),
  }
});
