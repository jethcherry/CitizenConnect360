import { Component } from '@angular/core';
import { AboutUsComponent } from '../about-us/about-us.component';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [AboutUsComponent],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {

}
