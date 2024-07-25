import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms'
import { Store } from '@ngrx/store';
import { AppState } from '../../../States';
import { Observable } from 'rxjs';
import { selectAddViewFailure, selectAddViewLoading, selectAddViewSuccess, selectAllViews } from '../../../States/Selectors/views.selector';
import { ViewAction } from '../../../States/Actions/views.action';

@Component({
  selector: 'app-views',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './views.component.html',
  styleUrl: './views.component.css'
})
export class ViewsComponent implements  OnInit {

  constructor (private store:Store<AppState> ,private fb:FormBuilder){}

  form!:FormGroup
  views=this.store.select(selectAllViews)
  addViewLoading$=this.store.select(selectAddViewLoading)
  addViewSuccess$=this.store.select(selectAddViewSuccess)
  addViewFailure$=this.store.select(selectAddViewFailure)




  ngOnInit(): void {
    this.form=this.fb.group({
      Image: ['',Validators.required],
      Title: ['',Validators.required],
      Description: ['',Validators.required],
      Date: ['',Validators.required],
    })
      
  }

  onSubmit(){
    this.store.dispatch(ViewAction.add({newViews:this.form.value}))
    
  }

}
