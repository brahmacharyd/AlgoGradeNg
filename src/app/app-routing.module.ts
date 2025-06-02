import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { TrainingPlacementsComponent } from './pages/training-placements/training-placements.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductDevelopmentComponent } from './pages/services/product-development/product-development.component';
import { CustomSoftwareComponent } from './pages/services/custom-software/custom-software.component';
import { WebMobileAppsComponent } from './pages/services/web-mobile-apps/web-mobile-apps.component';
import { ConsultingComponent } from './pages/services/consulting/consulting.component';
import { DigitalMarketingComponent } from './pages/services/digital-marketing/digital-marketing.component';
import { TrainingComponent } from './pages/services/training/training.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'HomePage' } },
  { path: 'services', component: ServicesComponent, data: { animation: 'ServicesPage' } },
  { path: 'training-placements', component: TrainingPlacementsComponent, data: { animation: 'TrainingPage' } },
  { path: 'about-us', component: AboutUsComponent, data: { animation: 'AboutPage' } },
  { path: 'contact', component: ContactComponent, data: { animation: 'ContactPage' } },{
    path: 'services/product-development',
    component: ProductDevelopmentComponent
  },
  {
    path: 'services/custom-software',
    component: CustomSoftwareComponent
  },
  {
    path: 'services/web-mobile-apps',
    component: WebMobileAppsComponent
  },
  {
    path: 'services/consulting',
    component: ConsultingComponent
  },
  {
    path: 'services/training',
    component: TrainingComponent
  },
  {
    path: 'services/digital-marketing',
    component: DigitalMarketingComponent
  }
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
