import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { TrainingPlacementsComponent } from './pages/training-placements/training-placements.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'HomePage' } },
  { path: 'services', component: ServicesComponent, data: { animation: 'ServicesPage' } },
  { path: 'training-placements', component: TrainingPlacementsComponent, data: { animation: 'TrainingPage' } },
  { path: 'about-us', component: AboutUsComponent, data: { animation: 'AboutPage' } },
  { path: 'contact', component: ContactComponent, data: { animation: 'ContactPage' } },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
