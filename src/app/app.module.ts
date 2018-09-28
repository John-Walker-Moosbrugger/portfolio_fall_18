import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CubeRoverComponent } from './cube-rover/cube-rover.component';
import { OffbeatComponent } from './offbeat/offbeat.component';
import { ConceptComponent } from './concept/concept.component';
import { BusinessComponent } from './business/business.component';
import { RadpiperComponent } from './radpiper/radpiper.component';
import { HyperloopComponent } from './hyperloop/hyperloop.component';
import { DrafterComponent } from './drafter/drafter.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    CubeRoverComponent,
    OffbeatComponent,
    ConceptComponent,
    BusinessComponent,
    RadpiperComponent,
    HyperloopComponent,
    DrafterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
