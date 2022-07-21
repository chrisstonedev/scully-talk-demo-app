import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';


@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: BlogListComponent },
    { path: ':slug', component: BlogComponent },
    { path: '**', component: BlogListComponent }
  ])],
  exports: [RouterModule]
})
export class BlogRoutingModule {
}

