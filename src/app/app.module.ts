import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { TrainingPlacementsComponent } from './pages/training-placements/training-placements.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutoSliderComponent } from './home/auto-slider/auto-slider.component';
import { ProgramAtAGlanceComponent } from './home/program-at-a-glance/program-at-a-glance.component';
import { ScrollAnimateDirective } from './home/home/scroll-animate.directive';
import { ProgramCurriculumComponent } from './home/program-curriculum/program-curriculum.component';
import { ProductDevelopmentComponent } from './pages/services/product-development/product-development.component';
import { CustomSoftwareComponent } from './pages/services/custom-software/custom-software.component';
import { WebMobileAppsComponent } from './pages/services/web-mobile-apps/web-mobile-apps.component';
import { ConsultingComponent } from './pages/services/consulting/consulting.component';
import { TrainingComponent } from './pages/services/training/training.component';
import { DigitalMarketingComponent } from './pages/services/digital-marketing/digital-marketing.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    TrainingPlacementsComponent,
    AboutUsComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    AutoSliderComponent,
    ProgramAtAGlanceComponent,
    ScrollAnimateDirective,
    ProgramCurriculumComponent,
    ProductDevelopmentComponent,
    CustomSoftwareComponent,
    WebMobileAppsComponent,
    ConsultingComponent,
    TrainingComponent,
    DigitalMarketingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
