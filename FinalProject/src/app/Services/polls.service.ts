import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PollResponse, Polls } from '../Models/Polls';
import { Observable } from 'rxjs';
import { Views } from '../Models/Views';

@Injectable({
  providedIn: 'root'
})
export class PollsService {

  constructor(private http:HttpClient) { }
  
  private readonly BASE_URL = 'http://localhost:5500/polls/'

  addPoll(newPoll:Polls):Observable<PollResponse>{
    return this.http.post<PollResponse>(this.BASE_URL + 'add',newPoll)

  }
  getPoll(PollsId:string):Observable<Polls>{
    return this.http.get<Polls>(`${this.BASE_URL}${PollsId}`)
  }
  getPolls():Observable<Polls[]>{
    return this.http.get<Polls[]>(this.BASE_URL)

  }
  updatePOll(updatePolls:Polls):Observable<PollResponse>{

    return this.http.put<PollResponse>(`${this.BASE_URL}update/${updatePolls.PollId}`,updatePolls)


  }
  deletePoll(PollId:string):Observable<void>{
    return this.http.delete<void>(`${this.BASE_URL}/delete/${PollId}`)

  }
}
