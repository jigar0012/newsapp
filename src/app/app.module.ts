import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SportsComponent } from './components/sports/sports.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { BusinessComponent } from './components/business/business.component';
import { HealthComponent } from './components/health/health.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { ScienceComponent } from './components/science/science.component';
import { GeneralComponent } from './components/general/general.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SportsComponent,
    EntertainmentComponent,
    BusinessComponent,
    HealthComponent,
    TechnologyComponent,
    ScienceComponent,
    GeneralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
