import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';


import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { CareerComponent } from './components/career/career.component';
import { FooterComponent } from './components/footer/footer.component';
import { KnowledgeRangeBarComponent } from './components/knowledge-range-bar/knowledge-range-bar.component';
import { SkillpageComponent } from './components/skillpage/skillpage.component';
import { CareerProjPageComponent } from './components/career-proj-page/career-proj-page.component';
import { ProjectExperienceComponent } from './components/project-experience/project-experience.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { EditWebsiteComponent } from './components/edit-website/edit-website.component';
import { EditskillsComponent } from './components/editskills/editskills.component';
import { EditexpComponent } from './components/editexp/editexp.component';

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireStorageModule } from "@angular/fire/compat/storage";
import { environment } from 'src/environments/environment';
import { LoaderComponent } from './components/loader/loader.component';
import { EditprofileComponent } from './components/editprofile/editprofile.component';
import { EditprojectsComponent } from './components/editprojects/editprojects.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    CareerComponent,
    FooterComponent,
    KnowledgeRangeBarComponent,
    SkillpageComponent,
    CareerProjPageComponent,
    ProjectExperienceComponent,
    AdminPageComponent,
    EditWebsiteComponent,
    EditskillsComponent,
    EditexpComponent,
    LoaderComponent,
    EditprofileComponent,
    EditprojectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SlickCarouselModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
