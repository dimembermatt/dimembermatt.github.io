import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// local imports
import { HomeComponent } from './home/home.component';
import { CourseworkComponent } from './coursework/coursework.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExtracurricularComponent } from './extracurricular/extracurricular.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    { path: 'home',             component: HomeComponent },
    { path: 'coursework',       component: CourseworkComponent },
    { path: 'projects',         component: ProjectsComponent },
    { path: 'extracurricular',  component: ExtracurricularComponent },
    { path: '',                 redirectTo: '/home',
                                pathMatch: 'full' },
    { path: '**',               component: NotFoundComponent },
];

@NgModule({
  imports: [
      RouterModule.forRoot(
          routes,
          { enableTracing: true }
      )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
