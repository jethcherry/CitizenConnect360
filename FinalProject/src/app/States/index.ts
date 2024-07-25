import { AuthInterface } from "./Reducers/auth.reducer";
import { IncidentInterface } from "./Reducers/Incidence.reducer";
import { PollsInterface } from "./Reducers/polls.reducer";
import { ViewInterface } from "./Reducers/view.reducer";


export interface AppState
{
    
    auth:AuthInterface
    incident:IncidentInterface
    polls:PollsInterface
    views:ViewInterface
}