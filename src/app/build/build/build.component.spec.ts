import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BuildService } from '../build.service';
import { BuildStep } from '../build-step';

import { BuildComponent } from './build.component';

describe('ProjectsListComponent', () => {
  let component: BuildComponent;
  let projectService: BuildService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        providers: [BuildService, BuildComponent],
        imports: [RouterTestingModule],
      }).compileComponents();
      component = TestBed.inject(BuildComponent);
      projectService = TestBed.inject(BuildService);
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load all projects', () => {
    let projectList: BuildStep[] = [
      {
        slug: 'website',
        name: 'Website',
        tagline: null,
        dateCreated: '',
        dateUpdated: '',
        commits: 0,
        languages: ['TypeScript'],
        platforms: ['Angular'],
        libraries: [],
        image: { path: 'assets/website.png', alt: 'Image alt' },
        availability: null,
        openSourceLink: 'https://google.com',
        description: '',
        purpose: null,
        challenge: null,
        netlifyBadge: null,
        cypressBadge: null,
      }
    ];

    const projectServiceSpy = spyOn(
      projectService,
      'getProjects'
    ).and.returnValue(projectList);

    component.loadProjectData();

    expect(projectService.getProjects).toHaveBeenCalled();
    expect(projectServiceSpy).toHaveBeenCalled();
    expect(component.projects.length).toEqual(1);
  });

  it('should load the languages list from project data', () => {
    let projectList: BuildStep[] = [
      {
        slug: null,
        name: null,
        tagline: null,
        dateCreated: '',
        dateUpdated: '',
        commits: 0,
        languages: ['TypeScript', 'C#'],
        platforms: [],
        libraries: [],
        image: null,
        availability: null,
        openSourceLink: null,
        description: null,
        purpose: null,
        challenge: null,
        netlifyBadge: null,
        cypressBadge: null,
      },
      {
        slug: null,
        name: null,
        tagline: null,
        dateCreated: '',
        dateUpdated: '',
        commits: 0,
        languages: ['TypeScript', 'Java'],
        platforms: [],
        libraries: [],
        image: null,
        availability: null,
        openSourceLink: null,
        description: null,
        purpose: null,
        challenge: null,
        netlifyBadge: null,
        cypressBadge: null,
      }
    ];

    spyOn(projectService, 'getProjects').and.returnValue(projectList);
    component.loadProjectData();

    expect(component.languages).toEqual(['C#', 'Java', 'TypeScript']);
  });

  it('should filter projects from the language dropdown', () => {
    let projectList: BuildStep[] = [
      {
        slug: null,
        name: 'A',
        tagline: null,
        dateCreated: '',
        dateUpdated: '',
        commits: 0,
        languages: ['TypeScript', 'HTML'],
        platforms: ['Web'],
        libraries: [],
        image: null,
        availability: null,
        openSourceLink: null,
        description: null,
        purpose: null,
        challenge: null,
        netlifyBadge: null,
        cypressBadge: null,
      },
      {
        slug: null,
        name: 'B',
        tagline: null,
        dateCreated: '',
        dateUpdated: '',
        commits: 0,
        languages: ['TypeScript'],
        platforms: ['Windows'],
        libraries: [],
        image: null,
        availability: null,
        openSourceLink: null,
        description: null,
        purpose: null,
        challenge: null,
        netlifyBadge: null,
        cypressBadge: null,
      },
      {
        slug: null,
        name: 'C',
        tagline: null,
        dateCreated: '',
        dateUpdated: '',
        commits: 0,
        languages: ['C#'],
        platforms: ['Windows'],
        libraries: [],
        image: null,
        availability: null,
        openSourceLink: null,
        description: null,
        purpose: null,
        challenge: null,
        netlifyBadge: null,
        cypressBadge: null,
      }
    ];

    spyOn(projectService, 'getProjects').and.returnValue(projectList);

    component.loadProjectData();
    expect(component.projects.map(x => x.name)).toEqual(['A', 'B', 'C']);
    expect(component.filteredProjects.map(x => x.name)).toEqual(['A', 'B', 'C']);

    component.selectedLanguage = 'TypeScript';
    component.filterChange();
    expect(component.projects.map(x => x.name)).toEqual(['A', 'B', 'C']);
    expect(component.filteredProjects.map(x => x.name)).toEqual(['A', 'B']);

    component.selectedPlatform = 'Windows';
    component.filterChange();
    expect(component.projects.map(x => x.name)).toEqual(['A', 'B', 'C']);
    expect(component.filteredProjects.map(x => x.name)).toEqual(['B']);

    component.selectedLanguage = '';
    component.filterChange();
    expect(component.projects.map(x => x.name)).toEqual(['A', 'B', 'C']);
    expect(component.filteredProjects.map(x => x.name)).toEqual(['B', 'C']);

    component.selectedPlatform = '';
    component.filterChange();
    expect(component.projects.map(x => x.name)).toEqual(['A', 'B', 'C']);
    expect(component.filteredProjects.map(x => x.name)).toEqual(['A', 'B', 'C']);
  });
});
