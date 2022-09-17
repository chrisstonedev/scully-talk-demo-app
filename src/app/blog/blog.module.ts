import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BackComponent } from './back/back.component';

@NgModule({
  declarations: [BlogComponent, BlogListComponent, BackComponent],
  imports: [CommonModule, BlogRoutingModule, ScullyLibModule]
})
export class BlogModule {
}
