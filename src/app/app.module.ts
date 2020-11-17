import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import { HomeServicesComponent } from './home-services/home-services.component';
import { LocationsComponent } from './locations/locations.component';
import { HomeContactComponent } from './home-contact/home-contact.component';
import { ScrollSpyDirective } from './scroll-spy.directive';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { InViewportModule } from '@thisissoon/angular-inviewport';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    HomeServicesComponent,
    LocationsComponent,
    HomeContactComponent,
    ScrollSpyDirective,
    FooterComponent,
    AboutUsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    InViewportModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
