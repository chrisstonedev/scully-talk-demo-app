import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogPosts: Observable<ScullyRoute[]>;

  constructor(private scully: ScullyRoutesService) {
  }

  ngOnInit(): void {
    this.blogPosts = this.scully.available$.pipe(
      map(routes => routes.filter(
        route => route.route.startsWith('/blog') && route.sourceFile?.endsWith('.md')
      ))
    );
  }

}
