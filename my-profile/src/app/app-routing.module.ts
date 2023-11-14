import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SkillpageComponent } from './components/skillpage/skillpage.component';
import { CareerProjPageComponent } from './components/career-proj-page/career-proj-page.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { EditWebsiteComponent } from './components/edit-website/edit-website.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'career', component: CareerProjPageComponent },
  { path: 'skills', component: SkillpageComponent },
  {
    path: 'admin', canActivateChild: [AuthGuard], component: AdminPageComponent, children: [
      { path: 'editSite', component: EditWebsiteComponent }
    ]
  }
  // { path: 'editSite', component: EditWebsiteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
