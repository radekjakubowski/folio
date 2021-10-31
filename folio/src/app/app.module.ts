import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { StatsComponent } from './stats/stats.component';
import { ExperienceStepComponent } from './experience-step/experience-step.component';
import { ExperienceComponent } from './experience/experience.component';
import { SettingsBarComponent } from './settings-bar/settings-bar.component';
import { SettingsModalComponent } from './settings-modal/settings-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TechnologiesComponent,
    ContactComponent,
    MenuComponent,
    StatsComponent,
    ExperienceStepComponent,
    ExperienceComponent,
    SettingsBarComponent,
    SettingsModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
