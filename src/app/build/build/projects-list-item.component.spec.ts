import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ProjectsListItemComponent } from './projects-list-item.component';
import { BuildStep } from '../build-step';
import projectData from '../../../assets/build-data.json';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProjectsListItemComponent', () => {
  let component: ProjectsListItemComponent;
  let fixture: ComponentFixture<ProjectsListItemComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ProjectsListItemComponent],
        imports: [RouterTestingModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsListItemComponent);
    component = fixture.componentInstance;
    const list: BuildStep[] = projectData;
    component.project = list[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
