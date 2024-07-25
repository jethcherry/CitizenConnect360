import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Incidence,IncidenceResponse } from '../Models/Incidence'; 

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  private readonly baseURL = 'http://localhost:5500/incidents/';

  constructor(private http: HttpClient) { }

  
  addIncident(newIncidence: Incidence): Observable<IncidenceResponse> {
    return this.http.post<IncidenceResponse>(`${this.baseURL}add`, newIncidence);
  }

  
  getIncident(incidenceId: string): Observable<Incidence> {
    return this.http.get<Incidence>(`${this.baseURL}${incidenceId}`);
  }

  
  getAllIncidents(): Observable<Incidence[]> {
    return this.http.get<Incidence[]>(`${this.baseURL}`);
  }


  updateIncident(updatedIncidence: Incidence): Observable<IncidenceResponse> {
    return this.http.put<IncidenceResponse>(`${this.baseURL}update/${updatedIncidence.IncidenceId}`, updatedIncidence);
  }

 
  deleteIncident(incidenceId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseURL}delete/${incidenceId}`);
  }

  
  
}
