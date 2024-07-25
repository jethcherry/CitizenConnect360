import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../States';
import { AuthActions } from '../../../States/Actions/auth.action';
import { errorSelector, loginLoading, loginSuccessSelector, selectCurrentUserRole } from '../../../States/Selectors/auth.selector';
import { AboutUsComponent } from '../about-us/about-us.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,AboutUsComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit{


  form!:FormGroup
  submitted = false;

  
  constructor(private fb: FormBuilder, private store: Store<AppState>,) {
    this.store.subscribe(state=>{
      console.log(state)
    })
  }

  ngOnInit(): void {
    this.form=this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]] 

    })}

    error$=this.store.select(errorSelector)
    loginSuccess$ = this.store.select(loginSuccessSelector);
    loginLoading$ = this.store.select(loginLoading);
    currentUserRole$ = this.store.select(selectCurrentUserRole);
    

    onSubmit(){
      this.store.dispatch(AuthActions.login({user:this.form.value}))
    }

  


}
