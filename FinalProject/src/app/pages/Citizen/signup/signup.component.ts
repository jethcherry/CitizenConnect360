import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../States';
import { registerError, registerLoading, registerSuccess } from '../../../States/Selectors/auth.selector';
import { AuthActions } from '../../../States/Actions/auth.action'; // Make sure this path is correct
import { Observable } from 'rxjs';
import { AboutUsComponent } from '../about-us/about-us.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule,AboutUsComponent],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'] // Corrected from `styleUrl` to `styleUrls`
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;
  submitted = false;


  constructor(private fb: FormBuilder, private store: Store<AppState>,) {
    this.store.subscribe(state=>{
      console.log(state)
    })
  }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      Name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      Role: ['', Validators.required],
      // Terms: [false, Validators.requiredTrue]
      
    });
  }
  error$=this.store.select(registerError)
  registerSuccess$=this.store.select(registerSuccess)
  registerLoading$= this.store.select(registerLoading)

  onSubmit(): void {

    if (this.signupForm.invalid) {
            alert('Please fill out all required fields.');
            return;
        }

        // if (!this.signupForm.get('Terms')?.value) {
        //     alert('You must accept the terms and conditions.');
        //     return;
        // }

        this.store.dispatch(AuthActions.register({user:this.signupForm.value}))
    }

   
}



