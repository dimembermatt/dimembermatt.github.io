import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// local imports
import { HomeComponent } from './home/home.component';
import { CourseworkComponent } from './coursework/coursework.component';

const routes: Routes = [
    { path: 'home',         component: HomeComponent },
    { path: 'coursework',   component: CourseworkComponent },
    { path: '',             redirectTo: '/home',
                            pathMatch: 'full' },
    { path: '**',           redirectTo: '/home'},
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
