import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { CareerComponent } from './components/career/career.component';
import { FooterComponent } from './components/footer/footer.component';
import { KnowledgeRangeBarComponent } from './components/knowledge-range-bar/knowledge-range-bar.component';
import { SkillpageComponent } from './components/skillpage/skillpage.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    CareerComponent,
    FooterComponent,
    KnowledgeRangeBarComponent,
    SkillpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
