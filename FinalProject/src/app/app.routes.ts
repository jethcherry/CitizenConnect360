import { Routes } from '@angular/router';
import { HomeComponent } from './pages/Citizen/home/home.component';
import { EducateComponent } from './pages/Citizen/educate/educate.component';
import { ViewsComponent } from './pages/Citizen/views/views.component';
import { IncidencesComponent } from './pages/Citizen/incidences/incidences.component';
import { PollsComponent } from './pages/Citizen/polls/polls.component';
import { LoginComponent } from './pages/Citizen/login/login.component';
import { SignupComponent } from './pages/Citizen/signup/signup.component';
import { AboutUsComponent } from './pages/Citizen/about-us/about-us.component';
import { ContactUsComponent } from './pages/Citizen/contact-us/contact-us.component';
import { ForgotPasswordComponent } from './pages/Citizen/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/Citizen/reset-password/reset-password.component';
import { ChatgptComponent } from './pages/AI/chatgpt/chatgpt.component';
import { DashboardComponent } from './pages/Admin/dashboard/dashboard.component';
import { UsersComponent } from './pages/Admin/users/users.component';
import { GovernmentOfficialComponent } from './pages/Admin/government-official/government-official.component';
import { Dashboard1Component } from './pages/GovernmentOfficial/dashboard1/dashboard1.component';
import { Polls1Component } from './pages/GovernmentOfficial/polls1/polls1.component';
import { Views1Component } from './pages/GovernmentOfficial/views1/views1.component';
import { AuthGuard } from './Guards/auth.guard';
import { CitizenGuard } from './Guards/citizen.guard';
import { AdminGuard } from './Guards/admin.guard';
import { GovernmentOfficialGuard } from './Guards/government.guard';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'educate',component:EducateComponent,canActivate: [AuthGuard,AuthGuard]},

    {path:'views',component:ViewsComponent,canActivate:[]},
    {path:'incidents',component:IncidencesComponent,canActivate:[AuthGuard]},
    {path:'polls',component:PollsComponent,canActivate:[]},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'about',component:AboutUsComponent},
    {path:'contact',component:ContactUsComponent},
    {path:'forgot',component:ForgotPasswordComponent},
    {path:'reset',component:ResetPasswordComponent},
    {path:'chatgpt',component:ChatgptComponent,canActivate:[AuthGuard]},
    {path:'dash-admin',component:DashboardComponent,canActivate:[AuthGuard,AdminGuard]},
    {path:'cadmin',component:UsersComponent,canActivate:[AuthGuard,AdminGuard]},
    {path:'gadmin',component:GovernmentOfficialComponent,canActivate:[AdminGuard]},
    {path:'dashboard1',component:Dashboard1Component,canActivate:[AuthGuard]},
    {path:'polls1',component:Polls1Component,canActivate:[AuthGuard,GovernmentOfficialGuard]},
    {path:'views1',component:Views1Component,canActivate:[AuthGuard,GovernmentOfficialGuard]},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
   
];
