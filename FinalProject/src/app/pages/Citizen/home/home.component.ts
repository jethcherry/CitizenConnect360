import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { EducateComponent } from '../educate/educate.component';
import { Router } from '@angular/router';
import { AboutUsComponent } from '../about-us/about-us.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,EducateComponent,AboutUsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router:Router){}
  navigate(){
    this.router.navigate(['/educate'])
    
  }

}
