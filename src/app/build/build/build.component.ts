import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BuildService } from '../build.service';
import { BuildStep } from '../build-step';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-list',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [BuildService],
})
export class BuildComponent implements OnInit {
  projects: BuildStep[] = [];
  filteredProjects: BuildStep[] = [];
  selectedLanguage = '';
  selectedPlatform = '';
  selectedLibrary = '';
  languages: string[] = [];
  platforms: string[] = [];
  libraries: string[] = [];
  sortOptions = ['Recently updated', 'Most commits', 'Recently created', 'Alphabetical'];
  selectedSortOption = this.sortOptions[0];

  constructor(private projectsService: BuildService, private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('The Build Process - Scully');
    this.loadProjectData();
    this.filterChange();
  }

  loadProjectData() {
    this.projects = this.projectsService.getProjects();
    this.filteredProjects = this.projects;

    function getSortedListOfUniqueElements(arrayOfArrays: string[][]) {
      return [].concat.apply([], arrayOfArrays).filter((elem, index, self) => index === self.indexOf(elem))
        .sort();
    }

    this.languages = getSortedListOfUniqueElements(this.projects.map(x => x.languages));
    this.platforms = getSortedListOfUniqueElements(this.projects.map(x => x.platforms));
    this.libraries = getSortedListOfUniqueElements(this.projects.map(x => x.libraries));
  }

  filterChange() {
    this.filteredProjects = [...this.projects].sort((a, b) => {
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
