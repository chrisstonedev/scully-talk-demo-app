import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BuildComponent } from './build/build.component';
import { JamstackComponent } from './jamstack/jamstack.component';
import { ClosingComponent } from './closing/closing.component';
import { BuildStepComponent } from './build/build-step/build-step.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoComponent } from './demo/demo.component';
import { DemoTaskComponent } from './demo/demo-task/demo-task.component';
import { AboutMeComponent } from './home/about-me/about-me.component';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: '', component: HomeComponent, data: { animationState: 'Home' } },
        { path: 'about-me', component: AboutMeComponent, data: { animationState: 'Home' } },
        { path: 'jamstack', component: JamstackComponent, data: { animationState: 'Jamstack' } },
        { path: 'build', component: BuildComponent, data: { animationState: 'Build' } },
        { path: 'build/:slug', component: BuildStepComponent, data: { animationState: 'Build' } },
        { path: 'demo', component: DemoComponent, data: { animationState: 'Demo' } },
        { path: 'demo/:slug', component: DemoTaskComponent, data: { animationState: 'Demo' } },
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
