import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BusinessComponent } from './components/business/business.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { GeneralComponent } from './components/general/general.component';
import { HealthComponent } from './components/health/health.component';
import { ScienceComponent } from './components/science/science.component';
import { SportsComponent } from './components/sports/sports.component';
import { TechnologyComponent } from './components/technology/technology.component';

const routes: Routes = [
  {
    path:'' , component: HomeComponent
  },
  {path:'business', component: BusinessComponent},
  {path:'entertainment', component: EntertainmentComponent},
  {path:'general', component: GeneralComponent},
  {path:'health', component:HealthComponent},
  {path:'science', component:ScienceComponent},
  {path:'sports', component:SportsComponent},
  {path:'techno', component: TechnologyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
