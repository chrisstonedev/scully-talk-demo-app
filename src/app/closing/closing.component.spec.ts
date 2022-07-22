import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClosingComponent } from './closing.component';

describe('ClosingComponent', () => {
  let component: ClosingComponent;
  let fixture: ComponentFixture<ClosingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
