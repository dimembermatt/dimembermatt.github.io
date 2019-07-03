import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeIntroComponent } from './home/home-intro/home-intro.component';
import { HomeAboutMeComponent } from './home/home-about-me/home-about-me.component';
import { CardFourxfiveComponent } from './card-fourxfive/card-fourxfive.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeIntroComponent,
    HomeAboutMeComponent,
    CardFourxfiveComponent
  ],
  imports: [
    BrowserModule,
    // BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
