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
import {ExperienceComponent} from './experience/experience.component';
import {ResumeComponent} from "./resume/resume.component";
import {SkillDetailComponent} from "./skills/skill-detail.component";
import {TagCloudModule} from 'angular-tag-cloud-module';
import { Angulartics2Module } from 'angulartics2';
import {Angulartics2GoogleTagManager} from "angulartics2/gtm";


const appRoutes: Routes = [
    {path: '', component: OverviewComponent},
    {path: 'skills', component: SkillOverviewComponent},
    {path: 'skills/:name', component: SkillOverviewComponent},
    {path: 'history', component: ExperienceComponent},
    {path: 'hobbies', component: HobbyComponent},
    {path: 'resume', component: ResumeComponent},

    {path: '', redirectTo: '', pathMatch: 'full'},
    // {path: '**', component: OverviewComponent}
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        TagCloudModule,
        NgbModule.forRoot(),
        Angulartics2Module.forRoot([Angulartics2GoogleTagManager]),
        RouterModule.forRoot(appRoutes)],
    declarations: [
        AppComponent,
        ResumeComponent,
        OverviewComponent,
        SkillOverviewComponent,
        SkillClassifierComponent,
        SkillDetailComponent,
        OverviewComponent,
        HobbyComponent,
        ResumeComponent,
        AboutComponent,
        FooterComponent,
        HeaderComponent,
        ExperienceComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
