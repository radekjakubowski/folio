import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { CustomThemeModalComponent } from './custom-theme-modal/custom-theme-modal.component';
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
import { NgxSkillBarModule } from 'ngx-skill-bar';
import { HobbiesComponent } from './about/hobbies/hobbies.component';
import { ThemeDisplayComponent } from './settings-modal/theme-display/theme-display.component';
import { AnimatedSkillBarComponent } from './technologies/animated-skill-bar/animated-skill-bar.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    SettingsModalComponent,
    HobbiesComponent,
    ThemeDisplayComponent,
    CustomThemeModalComponent,
    AnimatedSkillBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
        }
    }),
    NgxSkillBarModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
