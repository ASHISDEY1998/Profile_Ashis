import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SkillpageComponent } from './components/skillpage/skillpage.component';
import { CareerProjPageComponent } from './components/career-proj-page/career-proj-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'career', component: CareerProjPageComponent },
  { path: 'skills', component: SkillpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
