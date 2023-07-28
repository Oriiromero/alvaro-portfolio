import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MainModule } from './main/main.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';
import { ExperienceComponent } from './main/experience/experience.component';
import { ProjectsComponent } from './main/projects/projects.component';
import { ContactComponent } from './contact-section/pages/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
