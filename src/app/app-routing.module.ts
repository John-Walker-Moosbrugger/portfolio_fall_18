import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CubeRoverComponent } from './cube-rover/cube-rover.component';
import { OffbeatComponent } from './offbeat/offbeat.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cuberover',
    component: CubeRoverComponent
  },
  {
    path: 'CubeRover',
    component: CubeRoverComponent
  },
  {
    path: 'offbeat',
    component: OffbeatComponent
  },
  {
    path: '**',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
