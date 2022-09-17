import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { JamstackComponent } from './jamstack/jamstack.component';
import { BuildComponent } from './build/build.component';
import { DemoListItemComponent } from './demo/demo-item/demo-list-item.component';
import { DemoTaskComponent } from './demo/demo-task/demo-task.component';
import { DemoComponent } from './demo/demo.component';
import { BuildStepComponent } from './build/build-step/build-step.component';
import { ClosingComponent } from './closing/closing.component';
import { AppRoutingModule } from './app-routing.module';
import { BuildService } from './build/build.service';
import { TaglinesComponent } from './home/taglines/taglines.component';
import { SlideshowComponent } from './home/slideshow/slideshow.component';
import { BenefitComponent } from './jamstack/benefit/benefit.component';
import { AboutMeComponent } from './home/about-me/about-me.component';
import { BackComponent } from './back/back.component';
import { HiddenImageComponent } from './jamstack/hidden-image/hidden-image.component';
import { ScullyLibModule } from '@scullyio/ng-lib';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    JamstackComponent,
    BuildComponent,
    DemoListItemComponent,
    DemoTaskComponent,
    DemoComponent,
    BuildStepComponent,
    ClosingComponent,
    TaglinesComponent,
    SlideshowComponent,
    BenefitComponent,
    AboutMeComponent,
    BackComponent,
    HiddenImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ScullyLibModule
  ],
  providers: [BuildService, Title],
  bootstrap: [AppComponent]
})
export class AppModule {
}
