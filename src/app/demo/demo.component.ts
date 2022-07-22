import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DemoService } from './demo.service';
import { DemoTask } from './demo-task';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-list',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [DemoService],
})
export class DemoComponent implements OnInit {
  projects: DemoTask[] = [];
  demoTasks: DemoTask[] = [];
  selectedLanguage = '';
  selectedPlatform = '';
  selectedLibrary = '';
  languages: string[] = [];
  platforms: string[] = [];
  libraries: string[] = [];
  sortOptions = ['Recently updated', 'Most commits', 'Recently created', 'Alphabetical'];
  selectedSortOption = this.sortOptions[0];

  constructor(private projectsService: DemoService, private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('The Build Process - Scully');
    this.loadProjectData();
    this.filterChange();
  }

  loadProjectData() {
    this.projects = this.projectsService.getProjects();
    this.demoTasks = this.projects;

    function getSortedListOfUniqueElements(arrayOfArrays: string[][]) {
      return [].concat.apply([], arrayOfArrays).filter((elem, index, self) => index === self.indexOf(elem))
        .sort();
    }

    this.languages = getSortedListOfUniqueElements(this.projects.map(x => x.languages));
    this.platforms = getSortedListOfUniqueElements(this.projects.map(x => x.platforms));
    this.libraries = getSortedListOfUniqueElements(this.projects.map(x => x.libraries));
  }

  filterChange() {
    this.demoTasks = [...this.projects].sort((a, b) => {
      switch (this.selectedSortOption) {
        case 'Recently created':
          return b.dateCreated.localeCompare(a.dateCreated);
        case 'Recently updated':
          const compareDateUpdated = b.dateUpdated.localeCompare(a.dateUpdated);
          if (compareDateUpdated !== 0)
            return compareDateUpdated;
          if (b.commits < a.commits)
            return -1;
          if (b.commits > a.commits)
            return 1;
          return 0;
        case 'Most commits':
          if (b.commits < a.commits)
            return -1;
          if (b.commits > a.commits)
            return 1;
          return 0;
        case 'Alphabetical':
          return a.name.localeCompare(b.name);
      }
    }).filter(
      x => {
        let showThisProject = true;
        if (this.selectedLanguage.length > 0)
          showThisProject &&= x.languages.includes(this.selectedLanguage);
        if (this.selectedPlatform.length > 0)
          showThisProject &&= x.platforms.includes(this.selectedPlatform);
        if (this.selectedLibrary.length > 0)
          showThisProject &&= x.libraries.includes(this.selectedLibrary);
        return showThisProject;
      }
    );
  }
}
