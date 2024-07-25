export interface Incidence
{
    IncidenceId:string
    Image:string
    Title:string
    Location:string
    Description:string
    Date:string
    Author:string
    UserId:string

}

export interface IncidenceResponse
{
    IncidenceId?:string
    Image:string
    Title:string
    location:string
    Description:string
    Date:string
    Author:string
    UserId:string
    message:string

}