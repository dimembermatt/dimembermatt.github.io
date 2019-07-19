import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

// local imports
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SectionComponent } from './section/section.component';
import { HomeComponent } from './home/home.component';
import { HomeIntroComponent } from './home/home-intro/home-intro.component';
import { CourseworkComponent } from './coursework/coursework.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExtracurricularComponent } from './extracurricular/extracurricular.component';

import { NotFoundComponent } from './not-found/not-found.component';

import { sanitizeHtmlPipe } from './pipes/sanitize-html.pipe';



@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    HomeComponent,
    HomeIntroComponent,
    CourseworkComponent,
    ProjectsComponent,
    ExtracurricularComponent,
    NotFoundComponent,
    sanitizeHtmlPipe,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
