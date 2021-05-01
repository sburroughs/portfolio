import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {OverviewComponent} from './overview/overview.component';
import {SkillOverviewComponent} from './skills/skill-overview.component';
import {HobbyComponent} from './hobby/hobby.component';
import {AboutComponent} from './about/about.component';
import {SkillClassifierComponent} from './skills/skill-classifier.component';
import {HttpClientModule} from '@angular/common/http';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {ExperienceOverviewComponent} from './experience/experience-overview.component';
import {ExperienceComponent} from './experience/experience.component';
import {SkillDetailComponent} from './skills/skill-detail.component';
import {TagCloudModule} from 'angular-tag-cloud-module';
import {WorkExperienceOverviewComponent} from './experience/work-experience-overview.component';


const appRoutes: Routes = [
  {path: '', component: OverviewComponent},
  {path: 'skills', component: SkillOverviewComponent},
  {path: 'experiences', component: WorkExperienceOverviewComponent},
  {path: 'hobbies', component: HobbyComponent},

  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '**', component: OverviewComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TagCloudModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    NgbModule],
  declarations: [
    AppComponent,
    OverviewComponent,
    SkillOverviewComponent,
    SkillClassifierComponent,
    SkillDetailComponent,
    OverviewComponent,
    HobbyComponent,
    AboutComponent,
    FooterComponent,
    HeaderComponent,
    ExperienceOverviewComponent,
    ExperienceComponent,
    WorkExperienceOverviewComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
