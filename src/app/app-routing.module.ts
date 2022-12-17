import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './common/about-us/about-us.component';
import { DashboardComponent } from './common/dashboard/dashboard.component';
import { HomeComponent } from './common/home/home.component';
import { ProfileComponent } from './common/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },{
    path: 'Dashboard',
    component: DashboardComponent
  },{
    path: 'Profile',
    component: ProfileComponent
  },{
    path: 'About-us',
    component: AboutUsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
