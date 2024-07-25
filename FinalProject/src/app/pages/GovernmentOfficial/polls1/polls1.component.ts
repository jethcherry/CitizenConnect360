import { Component } from '@angular/core';
import { PollsComponent } from '../../Citizen/polls/polls.component';
import { AboutUsComponent } from '../../Citizen/about-us/about-us.component';

@Component({
  selector: 'app-polls1',
  standalone: true,
  imports: [PollsComponent,AboutUsComponent],
  templateUrl: './polls1.component.html',
  styleUrl: './polls1.component.css'
})
export class Polls1Component {

}
