import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AboutUsComponent } from '../about-us/about-us.component';

@Component({
  selector: 'app-educate',
  standalone: true,
  imports: [AboutUsComponent],
  templateUrl: './educate.component.html',
  styleUrl: './educate.component.css'
})
export class EducateComponent {
  constructor(private router:Router){}
  navigate(){
    this.router.navigate(['/chatgpt'])

  }

}
