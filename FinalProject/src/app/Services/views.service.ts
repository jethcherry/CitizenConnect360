import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Views, ViewsResponse } from '../Models/Views';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewsService {

  constructor(private http:HttpClient) { }

  private readonly BASE_URL= 'http://localhost:5500/views/'

  addViews(newView:Views):Observable<ViewsResponse>{
    return this.http.post<ViewsResponse>(this.BASE_URL + 'add',newView)
  }
  getView(ViewId:string):Observable<Views>{
    return this.http.get<Views>(`${this.BASE_URL}${ViewId}`)
  }
  getViews():Observable<Views[]>{
    return this.http.get<Views[]>(this.BASE_URL)

  }
  updateViews(updateViews: Views): Observable<ViewsResponse> {
    return this.http.put<ViewsResponse>(`${this.BASE_URL}update/${updateViews.ViewId}`, updateViews);
  }

  deleteViews(ViewId:string):Observable<void>{
    return this.http.delete<void>(`${this.BASE_URL}delete/${ViewId}`)


  }
}
