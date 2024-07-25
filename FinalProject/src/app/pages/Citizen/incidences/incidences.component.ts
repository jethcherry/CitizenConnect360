import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AboutUsComponent } from '../about-us/about-us.component';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../States';
import { IncidentAction } from '../../../States/Actions/incident.action';
import { Observable } from 'rxjs';
import { Incidence } from '../../../Models/Incidence';
import { selectAllIncidences } from '../../../States/Selectors/incident.selector';

@Component({
  selector: 'app-incidences',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule,AboutUsComponent],
  templateUrl: './incidences.component.html',
  styleUrl: './incidences.component.css'
})
export class IncidencesComponent  implements OnInit{
  form: FormGroup;
  incidences$: Observable<Incidence[]>;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>
  ) { 
    this.form = this.fb.group({
      Image: [''],
      Title: ['', Validators.required],
      Location: ['', Validators.required],
      Description: ['', Validators.required],
      Date: ['', Validators.required],
      Author: ['', Validators.required]
    });

    this.incidences$ = this.store.pipe(select(selectAllIncidences));
  }

  ngOnInit(): void {
    this.loadIncidents();
  }

  loadIncidents(): void {
    this.store.dispatch(IncidentAction.getAll());
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.store.dispatch(IncidentAction.add({ newIncidence: this.form.value }));
      this.form.reset();
    }
  }
  


}

