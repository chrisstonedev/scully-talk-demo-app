import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BuildComponent } from './build/build/build.component';
import { JamstackComponent } from './jamstack/jamstack.component';
import { ClosingComponent } from './closing/closing.component';
import { ProjectDetailComponent } from './build/project-detail/project-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoComponent } from './demo/demo/demo.component';
import { SpeakingTalkComponent } from './demo/speaking-talk/speaking-talk.component';
import { AboutMeComponent } from './home/about-me/about-me.component';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: '', component: HomeComponent, data: { animationState: 'Home' } },
        { path: 'about-me', component: AboutMeComponent, data: { animationState: 'Home' } },
        { path: 'jamstack', component: JamstackComponent, data: { animationState: 'Jamstack' } },
        { path: 'build', component: BuildComponent, data: { animationState: 'Build' } },
        { path: 'build/:slug', component: ProjectDetailComponent, data: { animationState: 'Build' } },
        { path: 'demo', component: DemoComponent, data: { animationState: 'Demo' } },
        { path: 'demo/:slug', component: SpeakingTalkComponent, data: { animationState: 'Demo' } },
        { path: 'closing', component: ClosingComponent, data: { animationState: 'Closing' } },
        { path: '**', redirectTo: '/' }
      ], {
        scrollPositionRestoration: 'enabled'
      }
    ),
    BrowserAnimationsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
