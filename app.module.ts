import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SkillsComponent } from './skills/skills.component';
import { ProfilePicComponent } from './profile-pic/profile-pic.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';
import { AchievementsComponent } from './achievements/achievements.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SkillsComponent,
    ProfilePicComponent,
    EducationComponent,
    ExperienceComponent,
    ContactComponent,
    NavComponent,
    AchievementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
