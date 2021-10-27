import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [
  { path: '', component: MenuComponent},
  { path: 'about', component: AboutComponent},
  { path: 'technologies', component: TechnologiesComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'full-experience', component: ExperienceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
