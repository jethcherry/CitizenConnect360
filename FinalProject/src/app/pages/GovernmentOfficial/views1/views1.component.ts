import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ViewsComponent } from '../../Citizen/views/views.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatgptComponent } from '../../AI/chatgpt/chatgpt.component';
import { AboutUsComponent } from '../../Citizen/about-us/about-us.component';


@Component({
  selector: 'app-views1',
  standalone: true,
  imports: [RouterModule,CommonModule,ViewsComponent,FormsModule ,ReactiveFormsModule,ChatgptComponent,AboutUsComponent],
  templateUrl: './views1.component.html',
  styleUrl: './views1.component.css'
})

export class Views1Component {


 

}
