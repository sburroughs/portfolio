import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {EducationComponent} from './experience/education.component';
import {PositionComponent} from './experience/position.component';
import {RouterModule, Routes} from '@angular/router';
import {OverviewComponent} from './overview/overview.component';
import {SkillsComponent} from './skills/skills.component';
import {SkillDetailComponent} from './skills/skill-detail.component';
import {PersonalComponent} from './personal/personal.component';
import {ResumeComponent} from './experience/resume.component';
import {ContactComponent} from './personal/contact.component';
import {SkillChartComponent} from './skills/skill-chart.component';
import {HttpClientModule} from '@angular/common/http';


const appRoutes: Routes = [
  {path: '', component: OverviewComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'skills/:name', component: SkillDetailComponent},
  {path: 'experience', component: ResumeComponent},
  {path: 'personal', component: PersonalComponent},
  {path: 'resume', component: ResumeComponent},

  {path: '', redirectTo: '', pathMatch: 'full'},
  // {path: '**', component: OverviewComponent}
];

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, NgbModule.forRoot(), RouterModule.forRoot(appRoutes)],
  declarations: [
    AppComponent,
    ResumeComponent,
    EducationComponent,
    PositionComponent,
    OverviewComponent,
    SkillsComponent,
    SkillDetailComponent,
    SkillChartComponent,
    OverviewComponent,
    PersonalComponent,
    ResumeComponent,
    ContactComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
