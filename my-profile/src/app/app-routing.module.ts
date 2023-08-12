import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CareerComponent } from './components/career/career.component';
import { SkillpageComponent } from './components/skillpage/skillpage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'career', component: CareerComponent },
  { path: 'skills', component: SkillpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
