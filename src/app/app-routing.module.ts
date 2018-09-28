import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CubeRoverComponent } from './cube-rover/cube-rover.component';
import { OffbeatComponent } from './offbeat/offbeat.component';
import { ConceptComponent } from './concept/concept.component';
import { BusinessComponent } from './business/business.component';
import { RadpiperComponent } from './radpiper/radpiper.component';
import { DrafterComponent } from './drafter/drafter.component';
import { HyperloopComponent } from './hyperloop/hyperloop.component';

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
    path: 'offbeat',
    component: OffbeatComponent
  },
  {
    path: 'concept',
    component: ConceptComponent
  },
  {
    path: 'business',
    component: BusinessComponent
  },
  {
    path: 'radpiper',
    component: RadpiperComponent
  },
  {
    path: 'drafter',
    component: DrafterComponent
  },
  {
    path: 'hyperloop',
    component: HyperloopComponent
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
