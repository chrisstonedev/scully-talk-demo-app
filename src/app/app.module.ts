import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { JamstackComponent } from './jamstack/jamstack.component';
import { BuildComponent } from './build/build/build.component';
import { ProjectsListItemComponent } from './build/build/projects-list-item.component';
import { ProjectDetailComponent } from './build/project-detail/project-detail.component';
import { DemoComponent } from './demo/demo/demo.component';
import { SpeakingTalkComponent } from './demo/speaking-talk/speaking-talk.component';
import { ClosingComponent } from './closing/closing.component';
import { AppRoutingModule } from './app-routing.module';
import { BuildService } from './build/build.service';
import { ConferenceListComponent } from './demo/speaking-talk/conference-list/conference-list.component';
import { TaglinesComponent } from './home/taglines/taglines.component';
import { SlideshowComponent } from './home/slideshow/slideshow.component';
import { BenefitComponent } from './jamstack/benefit/benefit.component';
import { AboutMeComponent } from './home/about-me/about-me.component';
import { BackComponent } from './back/back.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    JamstackComponent,
    BuildComponent,
    ProjectsListItemComponent,
    ProjectDetailComponent,
    DemoComponent,
    SpeakingTalkComponent,
    ClosingComponent,
    ConferenceListComponent,
    TaglinesComponent,
    SlideshowComponent,
    BenefitComponent,
    AboutMeComponent,
    BackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [BuildService, Title],
  bootstrap: [AppComponent]
})
export class AppModule {
}
