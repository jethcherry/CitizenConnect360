import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-polls',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './polls.component.html',
  styleUrl: './polls.component.css'
})
export class PollsComponent {
  pollForm1!: FormGroup;
  pollForm2!: FormGroup;
  submitPoll()
  {
    
  }

}
